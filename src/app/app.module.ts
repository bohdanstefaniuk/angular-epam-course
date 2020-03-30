import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';
import { AboutComponent } from './layout/components/about/about.component';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './layout/components/not-found/not-found.component';
import { OrdersModule } from './orders/orders.module';
import { CartService } from './cart';
import { AdminModule } from './admin/admin.module';
import { ProductsService } from './products';
import { OrderService } from './orders';
import { LoginComponent } from './layout/components/login/login.component';
import { AuthService } from './core/services/auth.service';
import { LogoutComponent } from './layout/components';

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
    OrdersModule,
    AdminModule,
    AppRoutingModule
  ],
  providers: [CartService, ProductsService, OrderService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
