import { UserEntity } from "../entities"

export interface IUserIp {
  id: number
  value: string
  user: UserEntity
}
