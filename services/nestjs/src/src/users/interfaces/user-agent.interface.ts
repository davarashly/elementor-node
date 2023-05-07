import { UserEntity } from "../entities"

export interface IUserAgent {
  id: number
  value: string
  user: UserEntity
}
