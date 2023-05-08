import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthController } from "./auth.controller"
import { UsersService } from "../users/users.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import {
  UserAgentEntity,
  UserEntity,
  UserIpEntity,
  UserLoginCountEntity,
  UserSessionEntity,
} from "../users/entities"

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserEntity,
      UserSessionEntity,
      UserAgentEntity,
      UserIpEntity,
      UserLoginCountEntity,
    ]),
  ],
  controllers: [AuthController],
  providers: [AuthService, UsersService],
})
export class AuthModule {}
