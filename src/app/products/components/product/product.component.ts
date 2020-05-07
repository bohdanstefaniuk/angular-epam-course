import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Product } from '../../../shared/models/product';
import { ProductsService } from '../../services';
import { CartService } from 'src/app/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product;
  productCategory: string;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.product = new Product();
    const observer = {
      next: (product: Product) => { this.product = { ...product }; },
      error: (err: any) => console.log(err)
    };
    this.activatedRoute.paramMap
      .pipe(
        switchMap((paramMap) => this.productsService.getProduct(+paramMap.get('productId')))
      ).subscribe(observer);
  }

  onBuy() {
    console.log('Buy event: user buy product');
    const product = { ...this.product } as Product;
    this.cartService.addProduct(product);
  }
}
