import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductCategory } from '../../shared/models/category';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private products = new Array<Product>();
  private productsPromise: Promise<Array<Product>>;

  constructor() {
    const product1 = new Product();
    product1.id = 1;
    product1.name = 'iPhone XR 128 Gb Black';
    product1.category = ProductCategory.Phones;
    product1.description = 'Brand new iPhone XR';
    product1.isAvailable = true;
    product1.price = 21000;
    product1.createdOn = new Date();

    const product2 = new Product();
    product2.id = 2;
    product2.name = 'iPhone XS Max 128 Gb Gold';
    product2.category = ProductCategory.Phones;
    product2.description = 'Brand new iPhone X';
    product2.isAvailable = false;
    product2.price = 28530;
    product2.createdOn = new Date(2020, 1, 20);

    const computer1 = new Product();
    computer1.id = 3;
    computer1.name = 'MacBook Pro 13\' 2017 128 Gb';
    computer1.category = ProductCategory.Computers;
    computer1.description = 'Professional tool for real professionals';
    computer1.isAvailable = true;
    computer1.price = 75800;
    computer1.createdOn = new Date(2020, 3, 8);

    this.products.push(product1);
    this.products.push(product2);
    this.products.push(computer1);
    this.productsPromise = Promise.resolve(this.products);
  }

  getProducts(): Promise<Array<Product>> {
    return this.productsPromise;
  }

  addProduct(product: Product) {
    product.id = this.getNextProductId();
    product.createdOn = new Date();
    this.products.push(product);
  }

  updateProduct(product: Product) {
    const index = this.products.findIndex((item) => item.id === product.id);
    if (index > -1) {
      this.products.splice(index, 1, product);
    }
  }

  getProduct(id: number | string): Promise<Product> {
    return this.getProducts()
      .then(products => products.find(product => product.id === +id))
      .catch(() => Promise.reject('Error in getProduct method'));
  }

  private getNextProductId(): number {
    let maxId = Math.max.apply(Math, this.products.map((item) => item.id));
    return ++maxId;
  }
}
