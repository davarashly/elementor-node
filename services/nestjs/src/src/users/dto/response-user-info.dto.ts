import { ApiProperty } from "@nestjs/swagger"

export class ResponseUserInfoDTO {
  @ApiProperty({
    description: "The timestamp of the user registration.",
    example: "2023-04-01T10:20:30.456Z",
  })
  registerTime: Date

  @ApiProperty({
    description: "The total number of logins of the user.",
    example: 5,
  })
  loginCount: number

  @ApiProperty({
    description: "The user agent string of the user's browser.",
    example:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36",
  })
  userAgent: string
}
