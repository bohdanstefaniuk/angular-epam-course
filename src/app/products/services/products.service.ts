import { Injectable } from '@angular/core';
import { Product } from '../../shared/models/product';
import { ProductCategory } from '../../shared/models/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getProducts(): Array<Product> {
    const products = new Array<Product>();
    const product1 = new Product();
    product1.name = 'iPhone XR 128 Gb Black';
    product1.category = ProductCategory.Phones;
    product1.description = 'Brand new iPhone XR';
    product1.isAvailable = true;
    product1.price = 21000;

    const product2 = new Product();
    product2.name = 'iPhone XS Max 128 Gb Gold';
    product2.category = ProductCategory.Phones;
    product2.description = 'Brand new iPhone X';
    product2.isAvailable = false;
    product2.price = 28530;

    const computer1 = new Product();
    computer1.name = 'MacBook Pro 13\' 2017 128 Gb';
    computer1.category = ProductCategory.Computers;
    computer1.description = 'Professional tool for real professionals';
    computer1.isAvailable = true;
    computer1.price = 75800;

    products.push(product1);
    products.push(product2);
    products.push(computer1);

    return products;
  }
}
