import { Module } from '@nestjs/common';
import { ClientsModule } from '@nestjs/microservices';
import { AppController } from './app.controller';
import { ordersServiceClientOptions } from './orders/orders-service-client.options';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [ClientsModule.register([ordersServiceClientOptions])],
  controllers: [AppController],
  providers: [OrdersService],
})
export class AppModule {}
