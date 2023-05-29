import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({ selector: '[progressBarState]' })
export class ProgressBarDirective implements OnChanges {
  @Input() progressBarState: number = 0;
  @Input() progressBarNotDefault: boolean = false;
  constructor(private _elementRef: ElementRef, private _renderer2: Renderer2) {
  }

  


  ngOnChanges(): void{
    // const colorMap: Record<number,string> = {
    //   25:
    // }

    this._renderer2.setStyle(
        this._elementRef.nativeElement, 'width', `${this.progressBarState}%`
    )

    // if(!this.progressBarNotDefault){
    //   return this._renderer2.addClass(this._elementRef.nativeElement, `progress-bar ${'bg-primary'}`)
    // }
    
  }
  


}
