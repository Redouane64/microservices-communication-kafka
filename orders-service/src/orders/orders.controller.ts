import { Metadata, ServerUnaryCall } from '@grpc/grpc-js';
import { Controller, Logger, SetMetadata, UseGuards } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthGuard } from 'src/guards';

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

  @GrpcMethod('OrdersService', 'createOrder')
  @SetMetadata('role', ['user'])
  @SetMetadata('magic-data', ['0b3cb2c8-7baa-4aec-b234-24d862479fe8'])
  @UseGuards(AuthGuard)
  createOrder(_: any, metadata: Metadata, call: ServerUnaryCall<any, any>) {
    this.logger.log(`Received:\n${JSON.stringify(_, undefined, 4)}`);
    return { ok: true };
  }
}
