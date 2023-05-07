import { IsNotEmpty } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class UpdateUserDTO {
  @ApiProperty({ required: false })
  username?: string

  @ApiProperty({ required: false })
  @IsNotEmpty()
  password?: string
}
