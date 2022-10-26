import { Metadata } from '@grpc/grpc-js';
import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { IOrdersService } from './interfaces/orders-service.interface';

@Injectable()
export class OrdersService implements OnModuleInit {
  private readonly logger = new Logger(OrdersService.name);

  private service: IOrdersService;

  constructor(
    @Inject('ORDERS_SERVICE')
    private readonly client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.service = this.client.getService<IOrdersService>('OrdersService');
  }

  async getOrdersByUserId(userId: string) {
    this.logger.log('fetching orders...');

    const metadata = new Metadata();
    metadata.add('userId', userId);

    const reply = await firstValueFrom(
      this.service.getOrders(undefined, metadata),
    );

    this.logger.log('orders fetched successfully.');

    return reply;
  }
}
