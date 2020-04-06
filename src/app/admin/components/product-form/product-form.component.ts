import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { ProductCategory } from 'src/app/shared/models/category';
import { Product } from 'src/app/shared/models/product';
import { ProductsService } from 'src/app/products';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;
  categories = this.enumSelector(ProductCategory);

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
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

  enumSelector(definition) {
    return Object.keys(definition)
      .filter(f => !isNaN(Number(f)))
      .map(key => ({ value: key, title: definition[key] }));
  }

  onSave() {
    const product = { ...this.product } as Product;
    const method = product.id ? 'updateProduct' : 'addProduct';
    this.productsService[method](product)
      .then(() => this.onReturn());
  }

  onReturn() {
    this.router.navigate(['/admin/products']);
  }
}
