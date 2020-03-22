import { Injectable } from '@angular/core';
import { Product } from 'src/app/shared/models/product';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems = new Array<CartItem>();
  cartSum = 0;
  cartQuantity = 0;

  constructor() { }

  addProduct(product: Product) {
    const cartItem = this.cartItems.find(x => x.name === product.name);
    if (cartItem) {
      this.increaseQuantity(cartItem);
    } else {
      this.createCartItem(product);
    }
  }

  removeCartItem(cartItem: CartItem) {
    this.deleteCartItem(cartItem);
    this.updateCartData();
  }

  increaseQuantity(cartItem: CartItem) {
    cartItem.increase();
    this.updateCartData();
    console.log('Cart: added existing product');
  }

  decreaseQuantity(cartItem: CartItem) {
    const existCartItem = this.cartItems.find(x => x.name === cartItem.name);
    if (!existCartItem) {
      return;
    }

    if (existCartItem.count === 1) {
      this.deleteCartItem(existCartItem);
    } else {
      existCartItem.decrease();
      console.log('Cart: product count decrease');
    }

    this.updateCartData();
  }

  cleanCart() {
    this.cartItems = new Array<CartItem>();
    this.updateCartData();
  }

  private createCartItem(product: Product) {
    const cartItem = new CartItem();
    cartItem.name = product.name;
    cartItem.pricePerOne = product.price;
    cartItem.count = 1;
    this.cartItems.push(cartItem);
    this.updateCartData();
  }

  private deleteCartItem(cartItem: CartItem) {
    const index = this.cartItems.indexOf(cartItem, 0);
    if (index > -1) {
      this.cartItems.splice(index, 1);
      console.log('Cart: product count = 0 and deleted from cart');
    }
  }

  private updateCartData() {
    let cartQuantity = 0;
    let cartSum = 0;
    this.cartItems.forEach((item) => {
      cartQuantity += item.count;
      cartSum += item.total;
    });
    this.cartQuantity = cartQuantity;
    this.cartSum = cartSum;
  }
}
