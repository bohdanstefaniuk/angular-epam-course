import { Observable } from 'rxjs';

import { Order } from '..';

export abstract class OrderService {
	abstract addOrder(order: Order): Observable<Order>;
	abstract getOrders(): Observable<Array<Order>>;
}