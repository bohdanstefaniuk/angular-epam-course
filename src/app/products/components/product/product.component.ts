import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../shared/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent{
  @Input() product: Product;
  @Output() buy = new EventEmitter<Product>();

  constructor() { }

  onBuy() {
    console.log('Buy event: user buy product');
    console.table(this.product);
    this.buy.emit(this.product);
  }
}
