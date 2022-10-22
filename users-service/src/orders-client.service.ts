import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrdersClientService implements OnModuleInit {
  private readonly logger = new Logger(OrdersClientService.name);

  constructor(
    @Inject('ORDERS_SERVICE')
    private readonly ordersClient: ClientKafka,
  ) {}

  onModuleInit() {
    this.ordersClient.subscribeToResponseOf('get_orders');
  }

  async getOrdersByUserId(userId: string) {
    this.logger.log('fetching user orders...');

    const reply = await firstValueFrom(
      this.ordersClient.send('get_orders', { userId }),
    );

    return reply;
  }
}
