import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { FindOneOptions, Repository } from "typeorm"
import { CreateUserDTO, ResponseUserDTO, ResponseUserInfoDTO } from "./dto"
import {
  UserEntity,
  UserIpEntity,
  UserLoginCountEntity,
  UserSessionEntity,
} from "./entities"
import { Logger } from "../common/logger"

@Injectable()
export class UsersService {
  private logger: Logger

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(UserSessionEntity)
    private userSessionRepository: Repository<UserSessionEntity>,
    @InjectRepository(UserIpEntity)
    private userIpRepository: Repository<UserIpEntity>,
    @InjectRepository(UserLoginCountEntity)
    private userLoginCountRepository: Repository<UserLoginCountEntity>,
  ) {
    this.logger = new Logger(UserEntity.name)
  }

  async getOnlineUsers(): Promise<ResponseUserDTO[]> {
    try {
      const sessions = await this.userSessionRepository
        .createQueryBuilder("session")
        .leftJoinAndSelect("session.ipAddress", "ipAddress")
        .leftJoinAndSelect("session.user", "user")
        .where(
          `session.updatedAt IN (SELECT MAX(updatedAt) FROM user_sessions GROUP BY userId)`,
        )
        .orderBy("user.id")
        .addSelect(
          (subQuery) =>
            subQuery
              .select("MIN(subSession.createdAt)", "loginTime")
              .from(UserSessionEntity, "subSession")
              .where("subSession.user = session.user")
              .groupBy("subSession.user"),
          "loginTime",
        )
        .addSelect("ipAddress.value", "ip")
        .getRawMany()
        .then(
          (result) =>
            result.map(
              (item) =>
                ({
                  id: item.user_id,
                  username: item.user_username,
                  updatedAt: item.user_updatedAt,
                  loginTime: item.loginTime,
                  lastLogin: item.session_updatedAt,
                  ip: item.ip,
                } satisfies ResponseUserDTO),
            ) as ResponseUserDTO[],
        )

      return sessions
    } catch (e) {
      this.logger.error("getOnlineUsers", `${e.name}: ${e.message}`)
      throw new BadRequestException()
    }
  }

  async findUser(opts: FindOneOptions<UserEntity>): Promise<UserEntity> {
    try {
      return await this.userRepository.findOne(opts)
    } catch (e) {
      this.logger.error("findUser", `${e.name}: ${e.message}`)

      throw new BadRequestException()
    }
  }

  async findUserSession(
    opts: FindOneOptions<UserSessionEntity>,
  ): Promise<UserSessionEntity> {
    try {
      return await this.userSessionRepository.findOne(opts)
    } catch (e) {
      this.logger.error("findUserSession", `${e.name}: ${e.message}`)

      throw new BadRequestException()
    }
  }

  async findUserLoginCount(
    opts: FindOneOptions<UserLoginCountEntity>,
  ): Promise<UserLoginCountEntity> {
    try {
      return await this.userLoginCountRepository.findOne(opts)
    } catch (e) {
      this.logger.error("findUserLoginCount", `${e.name}: ${e.message}`)

      throw new BadRequestException()
    }
  }

  async findUserIp(opts: FindOneOptions<UserIpEntity>): Promise<UserIpEntity> {
    try {
      return await this.userIpRepository.findOne(opts)
    } catch (e) {
      this.logger.error("findUserIp", `${e.name}: ${e.message}`)

      throw new BadRequestException()
    }
  }

  async getUserInfo(id: number): Promise<ResponseUserInfoDTO | undefined> {
    try {
      const userInfo = await this.userSessionRepository
        .createQueryBuilder("session")
        .leftJoinAndSelect("session.userAgent", "userAgent")
        .leftJoinAndSelect("session.user", "user")
        .leftJoinAndSelect("user.loginCount", "loginCount")
        .where(
          `session.updatedAt IN (SELECT MAX(updatedAt) FROM user_sessions WHERE user.id = :userId)`,
          { userId: id },
        )
        .orderBy("user.id")
        .addSelect("userAgent.value", "userAgent")
        .addSelect("loginCount.value", "loginCount")
        .getRawOne()
        .then((item) =>
          item
            ? ({
                registerTime: item.user_createdAt,
                loginCount: item.loginCount,
                userAgent: item.userAgent,
              } satisfies ResponseUserInfoDTO)
            : undefined,
        )

      if (!userInfo) {
        throw new NotFoundException("User not found or is not online")
      }

      return userInfo
    } catch (e) {
      this.logger.error("getUserInfo", `${e.name}: ${e.message}`)

      throw new NotFoundException(e.message)
    }
  }

  async create(
    createUserDto: Omit<CreateUserDTO, "confirmPassword">,
  ): Promise<UserEntity> {
    try {
      return await this.userRepository.create(createUserDto).save()
    } catch (e) {
      this.logger.error("create", `${e.name}: ${e.message}`)

      throw new BadRequestException()
    }
  }
}
