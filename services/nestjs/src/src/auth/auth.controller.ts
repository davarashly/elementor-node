import {
  Body,
  Controller,
  Delete,
  HttpCode,
  Post,
  Req,
  Res,
} from "@nestjs/common"
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from "@nestjs/swagger"
import { CreateUserDTO, LoginUserDTO } from "../users/dto"
import { Request, Response } from "express"
import { AuthService } from "./auth.service"

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: "Register new user" })
  @ApiCreatedResponse({ description: "User was created successfully" })
  @ApiBadRequestResponse({
    description: "Invalid input data: missing or incorrect fields",
  })
  @HttpCode(201)
  @Post("register")
  async register(@Body() createUserDto: CreateUserDTO) {
    await this.authService.register(createUserDto)
  }

  @ApiOperation({ summary: "Login with username and password" })
  @ApiOkResponse({ description: "User logged in successfully" })
  @ApiUnauthorizedResponse({
    description: "Invalid login data: incorrect username or password",
  })
  @HttpCode(200)
  @Post("login")
  async login(
    @Body() loginUserDto: LoginUserDTO,
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response,
  ) {
    const token = await this.authService.login(loginUserDto, req, res)
    return token
  }

  @ApiOperation({ summary: "Logout user" })
  @ApiNoContentResponse({ description: "User logged out successfully" })
  @HttpCode(204)
  @Delete("logout")
  async logout(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    await this.authService.logout(req, res)
  }
}
