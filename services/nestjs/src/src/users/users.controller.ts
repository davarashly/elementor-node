import {
  Controller,
  Get, Param,
} from "@nestjs/common"

import { ApiOperation, ApiTags } from "@nestjs/swagger"

import { UsersService } from "./users.service"

@ApiTags("users")
@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: "Get all users" })
  @Get()
  async getOnlineUsers() {
    const users = await this.usersService.getOnlineUsers()
    return users
  }

  @ApiOperation({ summary: "Get user info by id" })
  @Get(':id')
  async getUserInfo(@Param('id') id: number) {
    const users = await this.usersService.getUserInfo(id)
    return users
  }
}
