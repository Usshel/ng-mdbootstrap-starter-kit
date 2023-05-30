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
    const progressBarClasses = {
      0: 'bg-danger',
      33.33333: 'bg-warning',
      66.66666: 'bg-success',
    };

    const progressBarClass = Object.entries(progressBarClasses).reduce(
      (defaultClass, [percentage, className]) => {
        if (
          this._progressBarNotDefault &&
          this._progressBarState > Number(percentage)
        ) {
          return className;
        }
        return defaultClass;
      },
      'big-primary'
    );

    this._renderer2.addClass(this._elementRef.nativeElement, progressBarClass);
  }
  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {}
}
