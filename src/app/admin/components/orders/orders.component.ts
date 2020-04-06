import { Component, OnInit } from '@angular/core';
import { OrderService, Order } from 'src/app/orders';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Observable<Array<Order>>;

  constructor(
    private orderService: OrderService
  ) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

}
