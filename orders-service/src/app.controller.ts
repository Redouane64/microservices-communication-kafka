import { Controller, Get, Logger, Res } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Response } from 'express';

@Controller()
export class AppController {
  private readonly logger = new Logger(AppController.name);

  @MessagePattern('get_orders')
  getOrders(data: any) {
    this.logger.log(`getting orders for user '${data.userId}' ...`);
    return [
      {
        id: 101,
        user: data.userId,
        order_items: [2, 3, 4],
        created_at: Date.now(),
      },
    ];
  }

  @Get()
  getHello(@Res() response: Response): Response {
    return response.sendStatus(200);
  }
}
