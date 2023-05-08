import { Controller, Get, HttpCode, Param } from "@nestjs/common"

import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from "@nestjs/swagger"

import { UsersService } from "./users.service"
import { ResponseUserDTO, ResponseUserInfoDTO } from "./dto"

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: "Get all online users" })
  @ApiOkResponse({
    description: "The list of online users.",
    type: [ResponseUserDTO],
  })
  @HttpCode(200)
  @Get("online")
  async getOnlineUsers() {
    const users = await this.usersService.getOnlineUsers()
    return users
  }

  @ApiOperation({ summary: "Get user info by id" })
  @ApiOkResponse({
    description: "The online user info.",
    type: ResponseUserInfoDTO,
  })
  @ApiNotFoundResponse({ description: "User not found or not online." })
  @Get("online/:id")
  async getUserInfo(@Param("id") id: number) {
    const user = await this.usersService.getUserInfo(id)

    return user
  }
}
