import { ApiProperty } from "@nestjs/swagger"

export class ResponseUserDTO {
  @ApiProperty({
    description: "The unique identifier of the user.",
    example: 1,
  })
  id: number

  @ApiProperty({
    description: "The username of the user.",
    example: "john_doe",
  })
  username: string

  @ApiProperty({
    description: "The timestamp of the last update of the user.",
    example: "2023-05-08T12:34:56.789Z",
  })
  updatedAt: Date

  @ApiProperty({
    description: "The timestamp of the first login of the user.",
    example: "2023-05-01T08:30:00.123Z",
  })
  loginTime: Date

  @ApiProperty({
    description: "The timestamp of the last login of the user.",
    example: "2023-05-08T12:34:56.789Z",
  })
  lastLogin: Date

  @ApiProperty({
    description: "The IP address of the user.",
    example: "192.168.0.1",
  })
  ip: string
}
