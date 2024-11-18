import * as process from 'node:process';
import { NestFactory } from '@nestjs/core';
import { setupSwagger } from '@/swagger';
import { WinstonModule } from 'nest-winston';
import { WinstonOptions } from '@/winston';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
    bodyParser: true,
    rawBody: true,
    logger: WinstonModule.createLogger(WinstonOptions),
  });

  await setupSwagger(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
