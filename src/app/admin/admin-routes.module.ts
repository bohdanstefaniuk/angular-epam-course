import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { NotFoundComponent } from '../layout/components';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'products', component: AdminProductsComponent },
      { path: 'products/add', component: ProductFormComponent },
      { path: 'products/edit/:productId', component: ProductFormComponent },
      { path: 'orders', component: OrdersComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
