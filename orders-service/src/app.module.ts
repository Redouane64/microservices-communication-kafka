import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { OrdersController } from './orders/orders.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController, OrdersController],
  providers: [],
  exports: [UserModule],
})
export class AppModule {}
