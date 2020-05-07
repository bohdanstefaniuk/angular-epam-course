import { Product } from 'src/app/shared/models/product';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class ProductsService {
	abstract getProducts(): Promise<Array<Product>>;
	abstract getProduct(id: number | string): Promise<Product>;
	abstract addProduct(product: Product): Promise<Product>;
	abstract updateProduct(product: Product): Promise<Product>;
}