import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;
  @Output() increaseItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() decreaseItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();
  @Output() removeItem: EventEmitter<CartItem> = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  onIncrease() {
    this.increaseItem.emit(this.cartItem);
  }

  onDecrease() {
    this.decreaseItem.emit(this.cartItem);
  }

  onRemove() {
    this.removeItem.emit(this.cartItem);
  }
}
