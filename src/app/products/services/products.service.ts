import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from '../../shared/models/product';
import { ProductsService } from './products.service.interface';

@Injectable()
export class ProductsHttpService implements ProductsService {
  private baseProductsUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {}

  getProducts(): Promise<Array<Product>> {
    return this.http.get(this.baseProductsUrl)
      .toPromise()
      .then(response => response as Array<Product>)
      .catch();
  }

  getProduct(id: number | string): Promise<Product> {
    const url = `${this.baseProductsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response as Product)
      .catch(this.errorHandler);
  }

  addProduct(product: Product): Promise<Product> {
    product.createdOn = new Date();
    const json = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http
      .post(this.baseProductsUrl, json, options)
      .toPromise()
      .then(response => response as Product)
      .catch(this.errorHandler);
  }

  updateProduct(product: Product): Promise<Product> {
    const json = JSON.stringify(product);
    const url = `${this.baseProductsUrl}/${product.id}`;
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put(url, json, options)
      .toPromise()
      .then(response => response as Product)
      .catch(this.errorHandler);
  }

  private errorHandler(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
