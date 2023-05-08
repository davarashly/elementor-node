import { IUser } from "../interfaces"
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import { UserSessionEntity } from "./user-session.entity"
import { Exclude } from "class-transformer"
import { UserIpEntity } from "./user-ip.entity"
import { UserAgentEntity } from "./user-agent.entity"
import { UserLoginCountEntity } from "./user-login-count.entity"

@Entity("users")
export class UserEntity extends BaseEntity implements IUser {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  username: string

  @Column()
  @Exclude()
  password: string

  @OneToOne(() => UserLoginCountEntity, (loginCount) => loginCount.user, {
    nullable: true,
  })
  loginCount: UserLoginCountEntity

  @OneToMany(() => UserSessionEntity, (session) => session.user, {
    cascade: true,
  })
  sessions: UserSessionEntity[]

  @OneToMany(() => UserIpEntity, (ip) => ip.user, {
    cascade: true,
  })
  ips: UserIpEntity[]

  @OneToMany(() => UserAgentEntity, (userAgent) => userAgent.user, {
    cascade: true,
  })
  userAgents: UserAgentEntity[]

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date
}
