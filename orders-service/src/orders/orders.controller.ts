import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('orders')
export class OrdersController {
  private readonly logger = new Logger();

  @GrpcMethod('OrdersService', 'getOrders')
  getOrders(_: any, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    return {
      orders: [
        {
          id: 100,
          created_at: Date.now(),
          items: ['apple', 'banana'],
          userId: metadata.get('userId'),
        },
      ],
    };
  }
}
