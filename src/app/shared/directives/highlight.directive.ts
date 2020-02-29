import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('style.backgroundColor') get getBackgroundColor() {
    return this.color;
  }

  private color = 'white';

  constructor() { }

  @HostListener('mouseenter') onMouseEnter() {
    this.color = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'white';
  }
}
