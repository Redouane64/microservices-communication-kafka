import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const kafkaOptions: MicroserviceOptions = {
  transport: Transport.KAFKA,
  options: {
    client: {
      clientId: 'orders',
      brokers: ['localhost:9092'],
    },
    consumer: {
      groupId: 'orders-consumer',
    },
    producer: {
      allowAutoTopicCreation: true,
    },
  },
};
