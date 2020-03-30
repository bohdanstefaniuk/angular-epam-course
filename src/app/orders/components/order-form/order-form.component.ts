import { Component, OnInit } from '@angular/core';

import { CartService } from 'src/app/cart';
import { OrderItem, Order } from '../../models';
import { OrderService } from '../../services';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {
  order: Order;

  constructor(
    private orderService: OrderService,
    private cart: CartService
  ) {
    this.order = new Order();
  }

  ngOnInit() {
  }

  onSubmit() {
    alert('Thank you for your order.');
    const orderItems = this.cart.cartItems.map((item) => {
      return new OrderItem(item.productId, item.count);
    });
    this.order.items = orderItems;
    this.orderService.addOrder(this.order);
  }
}
