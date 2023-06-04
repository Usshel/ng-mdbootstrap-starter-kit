import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'simple-card-presentational',
  styleUrls: ['./card.presentational-component.scss'],
  templateUrl: './card.presentational-component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardPresentationalComponent {
  @Input() title: string = 'title';
  @Input() description!: string;
}
