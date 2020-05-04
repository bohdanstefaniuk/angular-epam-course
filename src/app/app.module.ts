import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AboutComponent } from './layout/components/about/about.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './layout/components/not-found/not-found.component';
import { OrdersModule } from './orders/orders.module';
import { CartService } from './cart';
import { ProductsService } from './products';
import { OrderService } from './orders';
import { LoginComponent } from './layout/components/login/login.component';
import { AuthService } from './core/services/auth.service';
import { LogoutComponent } from './layout/components';
import { interceptorProviders } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    SharedModule,
    HttpClientModule,
    OrdersModule,
    AppRoutingModule
  ],
  providers: [CartService, ProductsService, OrderService, AuthService, interceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    const replacer = (key: string, value: any): string =>
      typeof value === 'function' ? value.name : value;
    console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
  }
}
