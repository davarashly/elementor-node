import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { IUserAgent } from "../interfaces"
import { UserEntity } from "./user.entity"

@Entity("user_agents")
export class UserAgentEntity extends BaseEntity implements IUserAgent {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => UserEntity, (user) => user.userAgents)
  user: UserEntity

  @Column()
  value: string

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  lastUsedAt: Date
}
