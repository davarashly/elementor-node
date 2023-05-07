import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { FindOneOptions, Repository } from "typeorm"
import { CreateUserDTO, ResponseUserDTO, ResponseUserInfoDTO } from "./dto"
import { UserEntity, UserSessionEntity } from "./entities"

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    @InjectRepository(UserSessionEntity)
    private userSessionRepository: Repository<UserSessionEntity>,
  ) {}

  async getOnlineUsers(): Promise<ResponseUserDTO[]> {
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
  }

  private async findOne(opts: FindOneOptions<UserEntity>): Promise<UserEntity> {
    return this.userRepository.findOne(opts)
  }

  async getUserInfo(id: number): Promise<ResponseUserInfoDTO> {
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
      .then(
        (item) =>
          ({
            registerTime: item.user_createdAt,
            loginCount: item.loginCount,
            userAgent: item.userAgent,
          } satisfies ResponseUserInfoDTO as ResponseUserInfoDTO),
      )

    return userInfo
  }

  async create(createUserDto: CreateUserDTO): Promise<UserEntity> {
    return await this.userRepository.create(createUserDto).save()
  }
}
