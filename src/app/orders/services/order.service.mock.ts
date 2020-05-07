import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Order } from '../models/order';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { OrderService } from './order.service.interface';

const orderStorageKey = 'orders';

@Injectable()
export class OrderMockService implements OrderService {
  private orders = new Array<Order>();

  constructor(
    private storage: LocalStorageService
  ) {
    const ordersFromStorage = storage.getItem<Array<Order>>(orderStorageKey);
    if (ordersFromStorage) {
      this.orders = ordersFromStorage;
    }
  }

  addOrder(order: Order): Observable<Order> {
    this.orders.push(order);
    this.storage.removeItem(orderStorageKey);
	this.storage.setItem(orderStorageKey, this.orders);
	return of(order);
  }

  getOrders(): Observable<Array<Order>> {
	return of(this.orders);
  }
}
