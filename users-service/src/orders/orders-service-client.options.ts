import { ClientProviderOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const ordersServiceClientOptions: ClientProviderOptions = {
  name: 'ORDERS_SERVICE',
  transport: Transport.GRPC,
  options: {
    package: 'orders',
    protoPath: [join(__dirname, '../../../protos/orders.proto')],
    url: 'localhost:25925',
  },
};
