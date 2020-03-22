import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appClickHighlight]'
})
export class ClickHighlightDirective {
  @Input()
color = 'LightGreen';

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.renderer.setStyle(this.element.nativeElement, 'borderColor', this.color);
  }
}
