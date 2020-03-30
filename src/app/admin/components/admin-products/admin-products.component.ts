import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products';
import { Product } from 'src/app/shared/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products: Promise<Array<Product>>;

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onAdd() {
    this.router.navigate(['/admin/products/add']);
  }

  onEdit(id: number | string) {
    this.router.navigate(['/admin/products/edit', id]);
  }
}
