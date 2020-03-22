import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Product } from '../../../shared/models/product';
import { ProductCategory } from 'src/app/shared/models/category';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: Product;
  @Output() buy = new EventEmitter<Product>();

  productCategory: string;

  constructor() { }

  ngOnInit(): void {
    this.productCategory = ProductCategory[this.product.category];
  }

  onBuy() {
    console.log('Buy event: user buy product');
    console.table(this.product);
    this.buy.emit(this.product);
  }
}
