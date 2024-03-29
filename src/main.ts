import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationErrorFilter } from './common/filters/validation-error.filter';
import { TimeOutInterceptor } from './common/interceptors/timeout.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter());
  app.useGlobalFilters(new ValidationErrorFilter());

  app.useGlobalInterceptors(new TimeOutInterceptor());
  app.useGlobalPipes(new ValidationPipe());

 

  const options = new DocumentBuilder()
  .setTitle('CSI VISA')
  .setVersion('1.0')
  .setDescription('API DE CSI VISADO PERRONA')
  .build();

  const document = SwaggerModule.createDocument(app,options);

  SwaggerModule.setup('/api/docs',app,document);

  await app.listen(AppModule.port);
}
bootstrap();
