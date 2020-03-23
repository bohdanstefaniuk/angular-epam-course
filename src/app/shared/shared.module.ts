import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickHighlightDirective } from './directives/click-highlight.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HighlightDirective, ClickHighlightDirective, OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    ClickHighlightDirective,
    OrderByPipe,
    FormsModule,
    CommonModule
  ]
})
export class SharedModule { }
