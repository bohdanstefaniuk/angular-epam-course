import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';

import { NotFoundComponent, AboutComponent, LoginComponent, LogoutComponent } from './layout/components';
import { ProductListComponent, ProductComponent } from './products';
import { CartListComponent } from './cart';
import { OrderFormComponent } from './orders';
import { AdminGuard } from './core/guards/admin.guard';


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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path: 'admin',
    canLoad: [AdminGuard],
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    component: ProductListComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

const extraOptions: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, extraOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
