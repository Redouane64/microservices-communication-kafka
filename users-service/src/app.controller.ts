import {
  Body,
  Controller,
  Get,
  Inject,
  NotFoundException,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Response } from 'express';
import { firstValueFrom } from 'rxjs';
import { OrdersServiceClient } from './orders/orders-service-client';

@Controller()
export class AppController {
  constructor(
    private readonly ordersService: OrdersServiceClient,
    @Inject('USER_KAFKA_CLIENT')
    private readonly kafkaClient: ClientProxy,
  ) {
    /* TODO: */
  }

  @Post()
  async checkout(@Body() data: any, @Res() response: Response) {
    // assuming an order.created event is emitted after a checkout
    // operation completes successfully.
    const reply = await firstValueFrom(
      this.kafkaClient.emit<any, any>('order.created', {
        event: 'order.create',
        data,
      }),
    );

    return response.status(200).send(reply);
  }

  @Get(':id')
  async get(@Param('id') id: any, @Res() response: Response) {
    // a command is send via topic and response is returned from
    // reply topic.
    const data = await this.ordersService.getOrderById(id);

    if (!data) {
      throw new NotFoundException(`order does not exist`);
    }

    return response.status(200).send(data);
  }
}
