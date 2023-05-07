import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
} from "typeorm"
import { UserEntity } from "./user.entity"
import { IUserLoginCount } from "../interfaces/user-login-count.interface"

@Entity("user_login_counts")
export class UserLoginCountEntity
  extends BaseEntity
  implements IUserLoginCount
{
  @PrimaryGeneratedColumn()
  id: number

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: UserEntity

  @Column({ default: 1 })
  value: number
}
