import { Injectable } from '@angular/core';
import { Order } from '../models/order';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

const orderStorageKey = 'orders';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders = new Array<Order>();

  constructor(
    private storage: LocalStorageService
  ) {
    const ordersFromStorage = storage.getItem<Array<Order>>(orderStorageKey);
    if (ordersFromStorage) {
      this.orders = ordersFromStorage;
    }
  }

  addOrder(order: Order) {
    this.orders.push(order);
    this.storage.removeItem(orderStorageKey);
    this.storage.setItem(orderStorageKey, this.orders);
  }

  getOrders(): Promise<Array<Order>> {
    return Promise.resolve(this.orders);
  }
}
