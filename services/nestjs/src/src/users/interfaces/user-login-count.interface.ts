import { UserAgentEntity, UserEntity, UserIpEntity } from "../entities"

export interface IUserLoginCount {
  id: number
  user: UserEntity
  value: number
}
