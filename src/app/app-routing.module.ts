import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent, AboutComponent } from './layout/components';
import { ProductListComponent, ProductComponent } from './products';
import { CartListComponent } from './cart';
import { OrderFormComponent } from './orders';


const routes: Routes = [
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:productId',
    component: ProductComponent
  },
  {
    path: 'cart',
    component: CartListComponent
  },
  {
    path: 'order',
    component: OrderFormComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: ProductListComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
