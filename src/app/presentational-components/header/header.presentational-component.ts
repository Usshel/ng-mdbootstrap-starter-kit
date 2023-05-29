import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'header-presentational',
  styleUrls: ['./header.presentational-component.scss'],
  templateUrl: './header.presentational-component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderPresentationalComponent {
}
