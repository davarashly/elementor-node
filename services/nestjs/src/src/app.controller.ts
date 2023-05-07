import { Controller, Get } from "@nestjs/common"
import { AppService } from "./app.service"
import { ApiOperation, ApiTags } from "@nestjs/swagger"

@ApiTags("api")
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @ApiOperation({ summary: "Check health of server" })
  @Get("/healthCheck")
  healthCheck(): string {
    return this.appService.healthCheck()
  }
}
