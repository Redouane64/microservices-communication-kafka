import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { kafkaOptions } from './kafka.options';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice<MicroserviceOptions>(kafkaOptions);
  await app.startAllMicroservices();

  await app.listen(4000);
  const url = await app.getUrl();
  Logger.log(`Users service is listening on ${url}`, bootstrap.name);
}
bootstrap();
