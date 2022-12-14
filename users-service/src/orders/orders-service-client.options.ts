import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const ordersServiceClientOptions: ClientProviderOptions = {
  name: 'ORDERS_SERVICE',
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'orders',
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'app-consumer',
    },
  },
};
