import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger"
import * as cookieParser from "cookie-parser"
import { ValidationPipe } from "@nestjs/common"

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: process.env.CORS_ALLOWED_DOMAINS,
      credentials: true,
      methods: ["POST", "GET"],
    },
  })
  app.setGlobalPrefix("api")

  app.useGlobalPipes(new ValidationPipe())

  app.use(cookieParser())

  const document = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle("Elementor API")
      .setDescription("API description")
      .setVersion("1.0")
      .build(),
  )

  // Check API docs on /api/docs
  SwaggerModule.setup("api/docs", app, document, {
    swaggerOptions: {
      defaultModelsExpandDepth: -1,
      requestInterceptor: (req) => {
        req.credentials = "include"
        return req
      },
    },
  })

  await app.listen(process.env.BACKEND_PORT)
}

bootstrap()
