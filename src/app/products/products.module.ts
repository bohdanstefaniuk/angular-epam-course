import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductFormComponent } from './components/product-form/product-form.component';

@NgModule({
  declarations: [ProductComponent, ProductListComponent, ProductFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule
  ],
  exports: [ProductListComponent]
})
export class ProductsModule { }
