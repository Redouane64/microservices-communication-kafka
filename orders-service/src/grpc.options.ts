import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcOptions: MicroserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'orders',
    protoPath: [join(__dirname, '../../protos/orders.proto')],
    url: 'localhost:25925',
  },
};
