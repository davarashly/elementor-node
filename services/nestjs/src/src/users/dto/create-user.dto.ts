import { IsNotEmpty } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class CreateUserDTO {
  @ApiProperty({
    example: "john_doe",
    description: "The username of the user",
  })
  @IsNotEmpty()
  username: string

  @ApiProperty({
    example: "Password123",
    description: "The password of the user",
  })
  @IsNotEmpty()
  password: string

  @ApiProperty({
    example: "Password123",
    description: "The confirmation password of the user",
  })
  @IsNotEmpty()
  confirmPassword: string
}
