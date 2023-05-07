import {
  BaseEntity,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { UserEntity } from "./user.entity"
import { IUserSession } from "../interfaces"
import { UserIpEntity } from "./user-ip.entity"
import { UserAgentEntity } from "./user-agent.entity"

@Entity("user_sessions")
export class UserSessionEntity extends BaseEntity implements IUserSession {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToOne(() => UserEntity, (user) => user.sessions, {
    onDelete: "CASCADE",
  })
  user: UserEntity

  @ManyToOne(() => UserIpEntity)
  @JoinColumn()
  ipAddress: UserIpEntity

  @ManyToOne(() => UserAgentEntity)
  @JoinColumn()
  userAgent: UserAgentEntity

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date
}
