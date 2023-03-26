import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OrdersServiceClient implements OnModuleInit {
  private readonly logger = new Logger(OrdersServiceClient.name);

  constructor(
    @Inject('ORDERS_SERVICE')
    private readonly ordersClient: ClientKafka,
  ) {}

  onModuleInit() {
    this.ordersClient.subscribeToResponseOf('order.get');
  }

  async getOrderById(id: string) {
    const reply = await firstValueFrom(
      this.ordersClient.send('order.get', { id }),
    );

    return reply;
  }
}
