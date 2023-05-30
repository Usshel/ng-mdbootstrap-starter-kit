import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-img-overlap-list-presentational',
  styleUrls: ['./img-overlap-list.presentational-component.scss'],
  templateUrl: './img-overlap-list.presentational-component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgOverlapListPresentationalComponent {
  @Input() image!: string;
}
