import { Component, OnInit } from '@angular/core';

import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  cartItems: Array<CartItem>

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cartItems;
  }

  onIncreaseItem(cartItem: CartItem) {
    this.cartService.increaseCarItem(cartItem);
  }

  onDecreaseItem(cartItem: CartItem) {
    this.cartService.decreaseCartItem(cartItem);
  }

  onRemoveItem(cartItem: CartItem) {
    this.cartService.removeCarItem(cartItem);
  }
}
