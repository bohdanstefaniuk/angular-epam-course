import { NgModule } from '@angular/core';

import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartService } from './services/cart.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CartItemComponent, CartListComponent],
  providers: [CartService],
  imports: [
    SharedModule
  ],
  exports: [CartListComponent]
})
export class CartModule { }
