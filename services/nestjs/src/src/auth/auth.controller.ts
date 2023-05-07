import { Body, Controller, HttpStatus, Post, Req, Res } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { CreateUserDTO, LoginUserDTO } from "../users/dto"
import { Request, Response } from "express"
import { AuthService } from "./auth.service"

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Register new user" })
  @Post("register")
  async register(@Body() createUserDto: CreateUserDTO) {
    await this.authService.register(createUserDto)
    return HttpStatus.CREATED
  }

  @ApiOperation({ summary: "Login with username and password" })
  @Post("login")
  async login(
    @Body() loginUserDto: LoginUserDTO,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.authService.login(loginUserDto, req, res)
  }

  @ApiOperation({ summary: "Logout user" })
  @Post("logout")
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    return await this.authService.logout(req, res)
  }
}
