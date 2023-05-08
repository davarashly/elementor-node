import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from "@nestjs/common"
import { AbstractHttpAdapter } from "@nestjs/core"
import { Logger } from "./logger"

type HttpErrorResponse = {
  statusCode: HttpStatus
  message: string | string[]
  error: string
}

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private logger: Logger

  constructor(private readonly httpAdapter: AbstractHttpAdapter) {
    this.logger = new Logger("ErrorHandler")
  }

  catch(exception: any, host: ArgumentsHost): void {
    const ctx = host.switchToHttp()

    const errorResponse =
      exception instanceof HttpException
        ? (exception.getResponse() as HttpErrorResponse)
        : undefined

    const req = ctx.getRequest()
    const path = this.httpAdapter.getRequestUrl(req)
    const requestMethod = this.httpAdapter.getRequestMethod(req)

    let httpMessage: string
    let otherMessage: string[] = []

    if (typeof errorResponse?.message === "string") {
      httpMessage = !!errorResponse ? errorResponse.message : "Bad Request"
    } else {
      httpMessage = !!errorResponse ? errorResponse.error : "Bad Request"

      if (!!exception.errors) {
        for (const errorKey in exception.errors) {
          otherMessage.push(exception.errors[errorKey].message)
        }
      } else if (!!errorResponse) {
        otherMessage = errorResponse.message
      }
    }

    const httpStatus =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.BAD_REQUEST

    const responseBody = {
      message: httpMessage,
      timestamp: new Date().toISOString(),
      path,
    }

    this.httpAdapter.reply(ctx.getResponse(), responseBody, httpStatus)

    this.logger.error(
      `${requestMethod}: ${path}`,
      httpMessage,
      otherMessage,
      exception,
    )
  }
}
