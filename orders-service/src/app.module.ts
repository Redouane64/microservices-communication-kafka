import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OrdersController } from './orders/orders.controller';

@Module({
  imports: [],
  controllers: [AppController, OrdersController],
  providers: [],
})
export class AppModule {}
