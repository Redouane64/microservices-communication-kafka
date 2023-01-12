// {name: 'USER_KAFKA_CLIENT', transport: Transport.KAFKA, options: {}}

import { ClientProviderOptions, Transport } from '@nestjs/microservices';

export const kafkaClientOptions: ClientProviderOptions = {
  name: 'USER_KAFKA_CLIENT',
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'users',
      brokers: ['localhost:9092'],
    },
  },
};
