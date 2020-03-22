import { Component, OnInit } from '@angular/core';
import { ProductCategory } from 'src/app/shared/models/category';
import { ProductsService } from '../../services/products.service';
import { Product } from 'src/app/shared/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  name: string;
  price: number;
  category: ProductCategory;
  isAvailable: boolean;
  categories = this.enumSelector(ProductCategory);

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
  }

  enumSelector(definition) {
    return Object.keys(definition)
      .filter(f => !isNaN(Number(f)))
      .map(key => ({ value: key, title: definition[key] }));
  }

  onProductAdd() {
    const newProduct = new Product();
    newProduct.name = this.name;
    newProduct.price = this.price;
    newProduct.category = this.category;
    newProduct.isAvailable = this.isAvailable;
    this.productsService.addProduct(newProduct);
  }
}
