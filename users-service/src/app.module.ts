import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { kafkaOrdersClientOptions } from './kafka.options';
import { OrdersClientService } from './orders-client.service';

@Module({
  imports: [ClientsModule.register([kafkaOrdersClientOptions])],
  controllers: [AppController],
  providers: [OrdersClientService],
})
export class AppModule {}
