import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { OrderFormComponent } from './components';

@NgModule({
  declarations: [OrderFormComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [OrderFormComponent]
})
export class OrdersModule { }
