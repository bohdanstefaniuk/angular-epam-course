import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Array<CartItem>;
  orderByList: Array<string>;
  orderByProp: string;

  constructor(
    private router: Router,
    public cartService: CartService) {
    this.orderByList = this.getCartItemProps();
    this.orderByProp = this.orderByList[0];
  }

  ngOnInit() {
    this.cartItems = this.cartService.cartItems;
  }

  onIncreaseItem(cartItem: CartItem) {
    this.cartService.increaseQuantity(cartItem);
  }

  onDecreaseItem(cartItem: CartItem) {
    this.cartService.decreaseQuantity(cartItem);
  }

  onRemoveItem(cartItem: CartItem) {
    this.cartService.removeCartItem(cartItem);
  }

  onRemoveAllItems() {
    this.cartService.cleanCart();
  }

  getCartItemProps(): Array<string> {
    const emptyCartItem = new CartItem();
    return Object.getOwnPropertyNames(emptyCartItem);
  }

  onOrder() {
    this.router.navigate(['/order']);
  }
}
