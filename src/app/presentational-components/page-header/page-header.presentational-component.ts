import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'page-header-presentational',
  styleUrls: ['./page-header.presentational-component.scss'],
  templateUrl: './page-header.presentational-component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderPresentationalComponent {

@Input() title!: string;
@Input() description!: string;

}
