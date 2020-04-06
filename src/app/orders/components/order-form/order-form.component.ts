import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { CartService } from 'src/app/cart';
import { OrderItem, Order } from '../../models';
import { OrderService } from '../../services';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnDestroy {
  order: Order;
  private subscription: Subscription;

  constructor(
    private orderService: OrderService,
    private cart: CartService,
    private router: Router
  ) {
    this.order = new Order();
  }

  onSubmit() {
    alert('Thank you for your order.');
    this.prepareOrder();
    this.subscription = this.placeOrder();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private prepareOrder() {
    const orderItems = this.cart.cartItems.map((item) => {
      return new OrderItem(item.productId, item.count);
    });
    this.order.items = orderItems;
  }

  private placeOrder(): Subscription {
    return this.orderService
      .addOrder(this.order)
      .pipe(
        tap(() => this.cart.cleanCart()),
        tap(() => this.router.navigate(['']))
      ).subscribe();
  }
}
