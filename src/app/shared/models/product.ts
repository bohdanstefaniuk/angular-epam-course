import { ProductCategory } from './category';

export class Product {
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
}
