import {
  Body,
  Controller,
  Get,
  Inject,
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

  @Get(':id')
  async getHello(
    @Res() response: Response,
    @Param('id') id: string,
  ): Promise<Response> {
    const reply = await this.ordersService.getOrdersByUserId(id);
    return response.status(200).json(reply);
  }

  @Post()
  async send(@Body() data: any, @Res() response: Response) {
    const reply = await firstValueFrom(
      this.kafkaClient.emit<any, any>('user.data', {
        event: 'user.login',
        data,
      }),
    );

    return response.status(200).send();
  }
}
