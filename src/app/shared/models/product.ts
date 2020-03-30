import { ProductCategory } from './category';

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  createdOn: Date;
}
