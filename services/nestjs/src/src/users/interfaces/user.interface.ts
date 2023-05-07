import { UserAgentEntity, UserIpEntity, UserSessionEntity } from "../entities"
import { UserLoginCountEntity } from "../entities/user-login-count.entity"

export interface IUser {
  id: number
  username: string
  password: string
  loginCount: UserLoginCountEntity
  sessions: UserSessionEntity[]
  ips: UserIpEntity[]
  userAgents: UserAgentEntity[]
}
