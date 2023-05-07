import { Injectable, UnauthorizedException } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { FindOptionsWhere, Repository } from "typeorm"
import {
  UserEntity,
  UserSessionEntity,
  UserAgentEntity,
  UserIpEntity,
  UserLoginCountEntity,
} from "../users/entities"
import { CreateUserDTO, LoginUserDTO } from "../users/dto"
import { UsersService } from "../users/users.service"

import { Request, Response } from "express"
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import * as process from "process"

type EntityType<T> = T extends Repository<infer E> ? E : never

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(UserSessionEntity)
    private userSessionRepository: Repository<UserSessionEntity>,
    @InjectRepository(UserIpEntity)
    private userIpRepository: Repository<UserIpEntity>,
    @InjectRepository(UserAgentEntity)
    private userAgentRepository: Repository<UserAgentEntity>,
    @InjectRepository(UserLoginCountEntity)
    private userLoginCountRepository: Repository<UserLoginCountEntity>,
  ) {}

  async register(createUserDto: CreateUserDTO): Promise<void> {
    const { username, password } = createUserDto
    const hashedPassword = await bcrypt.hash(password, 12)

    await this.usersService.create({
      username,
      password: hashedPassword,
    })
  }

  private async upsertEntity<
    T extends Repository<UserIpEntity | UserAgentEntity>,
  >(user: UserEntity, value: string, repository: T): Promise<EntityType<T>> {
    const currentDate = new Date()

    const entity = await repository.findOneBy({
      user: user.id as FindOptionsWhere<UserEntity>,
      value,
    })

    if (!entity) {
      const offset = 10
      const tableName = repository.metadata.tableName

      const insertedEntity = await repository
        .create({ value, user: user })
        .save()

      await repository
        .createQueryBuilder()
        .delete()
        .where(
          `id IN (SELECT id FROM (SELECT id FROM ${tableName} WHERE user = :userId ORDER BY lastUsedAt DESC LIMIT ${offset} OFFSET ${offset}) AS subquery)`,
          { userId: user.id },
        )
        .execute()

      return insertedEntity as EntityType<T>
    } else {
      entity.lastUsedAt = currentDate

      await entity.save()

      return entity as EntityType<T>
    }
  }

  async login(loginUserDto: LoginUserDTO, req: Request, res: Response) {
    const user = await this.userRepository.findOneBy({
      username: loginUserDto.username,
    })

    if (!user) {
      throw new UnauthorizedException("Invalid username or password")
    }

    const passwordIsValid = await bcrypt.compare(
      loginUserDto.password,
      user.password,
    )

    if (!passwordIsValid) {
      throw new UnauthorizedException("Invalid username or password")
    }

    const [ipEntity, userAgentEntity] = await Promise.all([
      this.upsertEntity(user, req.ip, this.userIpRepository),
      this.upsertEntity(
        user,
        req.get("User-Agent") || "",
        this.userAgentRepository,
      ),
    ])

    let session: UserSessionEntity = await this.userSessionRepository.findOne({
      relations: ["ipAddress", "userAgent", "user"],
      where: {
        user: { id: user.id },
        ipAddress: { value: req.ip },
        userAgent: { value: req.get("User-Agent") || "" },
      },
    })

    if (!session) {
      session = new UserSessionEntity()
      session.user = user
      session.ipAddress = ipEntity
      session.userAgent = userAgentEntity
    } else {
      session.updatedAt = new Date()
    }

    let userLoginCount = await this.userLoginCountRepository.findOneBy({
      user: { id: user.id },
    })

    if (!userLoginCount) {
      userLoginCount = new UserLoginCountEntity()
      userLoginCount.user = user
    } else {
      userLoginCount.value++
    }

    await Promise.all([
      this.userSessionRepository.save(session),
      this.userLoginCountRepository.save(userLoginCount),
    ])

    const payload = { sub: user.id }
    const token = jwt.sign(payload, process.env.SECRET)

    res.cookie("token", `Bearer ${token}`)
  }

  async logout(req: Request, res: Response) {
    const token = (
      req.headers?.["Authorization"] ||
      req.cookies?.token ||
      ""
    )?.replace("Bearer ", "")

    const userId = jwt.decode(token)?.sub as string | null

    const user = await this.userRepository.findOneBy({
      id: +(userId || -1),
    })

    res.clearCookie("token")

    if (!user) {
      return
    }

    const session: UserSessionEntity = await this.userSessionRepository.findOne(
      {
        relations: ["ipAddress", "userAgent", "user"],
        where: {
          user: { id: user.id },
          ipAddress: { value: req.ip },
          userAgent: { value: req.get("User-Agent") || "" },
        },
      },
    )

    if (session) {
      await this.userSessionRepository.remove(session)
    }
  }
}