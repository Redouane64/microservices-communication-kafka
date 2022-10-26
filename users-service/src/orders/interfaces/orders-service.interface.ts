import { Metadata } from '@grpc/grpc-js';
import { Observable } from 'rxjs';
import { OrdersResponse } from '../dtos/orders-response';

export interface IOrdersService {
  getOrders(_: undefined, metadata: Metadata): Observable<OrdersResponse>;
}
