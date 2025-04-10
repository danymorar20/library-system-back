import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ❌ Removes properties that are not in the DTO
      forbidNonWhitelisted: true, // ❌ Throws error if extra properties are passed
      transform: true, // ✅ Transforms primitive types to the type specified in the DTO
      transformOptions: {
        enableImplicitConversion: false, // Stricter: does not convert types that you do not specify with @Type
      },
    }),
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
