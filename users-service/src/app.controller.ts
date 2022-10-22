import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { OrdersClientService } from './orders-client.service';

@Controller()
export class AppController {
  constructor(private readonly ordersService: OrdersClientService) {
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
}