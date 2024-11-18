import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

export const SWAGGER_URL = '/swagger';

export async function setupSwagger(app: INestApplication): Promise<void> {
  const config = new DocumentBuilder()
    .setTitle('Job Matcher API')
    .setDescription('Uses ML model')
    .setVersion('1.0')
    .addTag('job matcher')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup(SWAGGER_URL, app, document);
}
