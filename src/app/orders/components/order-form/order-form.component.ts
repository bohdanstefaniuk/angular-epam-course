import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';

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
  orderForm: FormGroup;
  private subscription: Subscription;

  constructor(
    private orderService: OrderService,
    private cart: CartService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.orderForm = new FormGroup({
      fullName: new FormControl('', [
        Validators.required
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      phones: new FormArray([new FormControl()]),
      isSelfDelivery: new FormControl(false),
      address: new FormControl()
    });
  }

  getIsControlInvalid(controlName: string): boolean {
    return this.orderForm.controls[controlName].invalid &&
      this.orderForm.controls[controlName].touched;
  }

  onAddPhone() {
    const controls = this.orderForm.controls.phones as FormArray;
    controls.push(new FormControl());
  }

  submit() {
    alert('Thank you for your order.');
    this.subscription = this.placeOrder(this.prepareOrder());
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private prepareOrder(): Order {
    const order = new Order();
    const orderItems = this.cart.cartItems.map((item) => {
      return new OrderItem(item.productId, item.count);
    });
    const phones = this.orderForm.value.phones.map((item) => {
      return item || '';
    }).join(', ');
    order.items = orderItems;
    order.fullName = this.orderForm.value.fullName;
    order.email = this.orderForm.value.email;
    order.phones = phones;
    order.isSelfDelivery = this.orderForm.value.isSelfDelivery;
    order.address = this.orderForm.value.address;
    return order;
  }

  private placeOrder(newOrder: Order): Subscription {
    return this.orderService
      .addOrder(newOrder)
      .pipe(
        tap(() => this.cart.cleanCart()),
        tap(() => this.router.navigate(['']))
      ).subscribe();
  }
}
