import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({ selector: '[hoverPointer]' })
export class PointerDirective {
  constructor(private _renderer2: Renderer2, private _elementRef: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'cursor',
      'pointer'
    );
  }
  @HostListener('mouseleave') onMouseLeave() {
    this._renderer2.removeStyle(this._elementRef.nativeElement, 'cursor');
  }
}
