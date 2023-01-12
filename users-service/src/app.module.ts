import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { ordersServiceClientOptions } from './orders/orders-service-client.options';
import { OrdersServiceClient } from './orders/orders-service-client';
import { kafkaClientOptions } from './user-kafka-client';

@Module({
  imports: [
    ClientsModule.register([ordersServiceClientOptions, kafkaClientOptions]),
  ],
  controllers: [AppController],
  providers: [OrdersServiceClient],
})
export class AppModule {}
