import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[clickHighlight]'
})
export class ClickHighlightDirective {
  @Input('color')
  color: string = 'LightGreen';

  constructor(private element: ElementRef,
    private renderer: Renderer2) { }

  @HostListener('click')
  onClick() {
    this.renderer.setStyle(this.element.nativeElement, 'borderColor', this.color);
  }
}
