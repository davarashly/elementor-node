import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { IUserIp } from "../interfaces"
import { UserEntity } from "./user.entity"

@Entity("user_ips")
export class UserIpEntity extends BaseEntity implements IUserIp {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => UserEntity, (user) => user.ips)
  user: UserEntity

  @Column()
  value: string

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  lastUsedAt: Date
}
