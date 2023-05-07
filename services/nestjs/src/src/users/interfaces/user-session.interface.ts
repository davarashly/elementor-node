import { UserAgentEntity, UserEntity, UserIpEntity } from "../entities"

export interface IUserSession {
  id: number
  user: UserEntity
  ipAddress: UserIpEntity
  userAgent: UserAgentEntity
}
