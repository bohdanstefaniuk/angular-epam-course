import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = new Array<CartItem>();
  cartTotal = 0;

  constructor() { }

  addToCart(product: Product) {
    let cartItem = this.cartItems.find(x => x.name === product.name);
    if (cartItem) {
      this.increaseCarItem(cartItem);
    } else {
      cartItem = new CartItem();
      cartItem.name = product.name;
      cartItem.pricePerOne = product.price;
      this.increaseCarItem(cartItem);
      this.cartItems.push(cartItem);
      console.log('Cart: added new product');
    }
  }

  removeCarItem(cartItem: CartItem) {
    this.deleteCartItem(cartItem);
    this.cartTotal -= cartItem.count * cartItem.pricePerOne;
  }

  increaseCarItem(cartItem: CartItem) {
    cartItem.count++;
    cartItem.total = cartItem.pricePerOne * cartItem.count;
    this.cartTotal += cartItem.pricePerOne;
    console.log('Cart: added existing product');
  }

  decreaseCartItem(cartItem: CartItem) {
    const existCartItem = this.cartItems.find(x => x.name === cartItem.name);
    if (!existCartItem) {
      return;
    }

    if (existCartItem.count === 1) {
      this.deleteCartItem(existCartItem);
    } else {
      existCartItem.count--;
      existCartItem.total = cartItem.pricePerOne * cartItem.count;
      console.log('Cart: product count decrease');
    }

    this.cartTotal -= cartItem.pricePerOne;
  }

  private deleteCartItem(cartItem: CartItem) {
    const index = this.cartItems.indexOf(cartItem, 0);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      console.log('Cart: product count = 0 and deleted from cart');
    }
  }
}
