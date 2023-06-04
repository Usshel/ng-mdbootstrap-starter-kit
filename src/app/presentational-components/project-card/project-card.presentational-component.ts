import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'project-card-presentational',
  styleUrls: ['./project-card.presentational-component.scss'],
  templateUrl: './project-card.presentational-component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectCardPresentationalComponent {
  @Input() title: string = 'title';
  @Input() description!: string;
}
