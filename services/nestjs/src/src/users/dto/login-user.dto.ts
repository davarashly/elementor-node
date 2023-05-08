import { IsNotEmpty } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class LoginUserDTO {
  @ApiProperty({
    example: "john_doe",
    description: "The username of the user",
  })
  @IsNotEmpty()
  username: string

  @ApiProperty({
    example: "password123",
    description: "The password of the user",
  })
  @IsNotEmpty()
  password: string
}
