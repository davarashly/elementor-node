import { Logger as NestLogger } from "@nestjs/common"

export class Logger {
  logger: NestLogger

  constructor(context: string) {
    this.logger = new NestLogger(context)
  }

  print(msg: string, method?: "error" | "debug" | "warn") {
    this.logger[method || "log"](msg)
  }

  log(method: string, message: string, other?: any) {
    this.logger.log(
      JSON.stringify({
        env: process.env.NODE_ENV,
        method,
        message,
        other,
      }),
    )
  }

  warn(method: string, message: string, other?: any) {
    this.logger.warn(
      JSON.stringify({
        env: process.env.NODE_ENV,
        method,
        message,
        other,
      }),
    )
  }

  debug(method: string, message: string, other?: any) {
    this.logger.debug(
      JSON.stringify({
        env: process.env.NODE_ENV,
        method,
        message,
        other,
      }),
    )
  }

  error(method: string, message: string, other?: any, exception?: Error) {
    this.logger.error(
      JSON.stringify({
        env: process.env.NODE_ENV,
        method,
        message,
        other,
      }).concat(exception?.stack ? "\n" + exception.stack.toString() : ""),
    )
  }
}
