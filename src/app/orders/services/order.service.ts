import { Injectable } from '@angular/core';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private orders = new Array<Order>();

  constructor() {}

  addOrder(order: Order) {
    this.orders.push(order);
  }
}
