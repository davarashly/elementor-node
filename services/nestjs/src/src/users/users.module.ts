import { Module } from "@nestjs/common"
import { UsersController } from "./users.controller"
import { UsersService } from "./users.service"
import { TypeOrmModule } from "@nestjs/typeorm"
import {
  UserAgentEntity,
  UserEntity,
  UserIpEntity,
  UserLoginCountEntity,
  UserSessionEntity,
} from "./entities"

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
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
