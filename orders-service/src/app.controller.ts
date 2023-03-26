import { Controller, Get, Logger, Res } from '@nestjs/common';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { Response } from 'express';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  private readonly orders = [];

  @MessagePattern('order.get')
  getOrders(data: any) {
    return this.orders[data.id] || null;
  }

  @MessagePattern('order.created')
  onUserLoggedIn(@Payload() data: any, @Ctx() context: KafkaContext) {
    delete data.event;
    this.orders.push({
      ...data,
      created_at: Date.now(),
    });
  }
}
