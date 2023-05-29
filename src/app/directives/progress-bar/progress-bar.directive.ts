import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({ selector: '[progressBarState]' })
export class ProgressBarDirective {
  private _progressBarState: number = 0;
  @Input() set progressBarState(value: number) {
    this._progressBarState = value;
    this._renderer2.setStyle(
      this._elementRef.nativeElement,
      'width',
      `${this._progressBarState}%`
    );
  }
  private _progressBarNotDefault: boolean = false;
  @Input() set progressBarNotDefault(value: boolean) {
    this._progressBarNotDefault = value;
    if (this._progressBarNotDefault && this._progressBarState < 33.33333) {
      this._renderer2.addClass(this._elementRef.nativeElement, `bg-danger`);
    } else if (
      this._progressBarNotDefault &&
      this._progressBarState < 66.66666
    ) {
      this._renderer2.addClass(this._elementRef.nativeElement, `bg-warning`);
    } else if (
      this._progressBarNotDefault &&
      this._progressBarState > 66.66666
    ) {
      this._renderer2.addClass(this._elementRef.nativeElement, `bg-success`);
    } else {
      this._renderer2.addClass(this._elementRef.nativeElement, `bg-primary`);
    }
  }
  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {}
}
