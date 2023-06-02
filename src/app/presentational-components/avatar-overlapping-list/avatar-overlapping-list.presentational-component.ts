import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { AvatarOverlapListViewModel } from 'src/app/view-models/avatar-overlap-list/avatar-overlap-list.view-model';

@Component({
  selector: 'avatar-overlapping-list-presentational',
  styleUrls: ['./avatar-overlapping-list.presentational-component.scss'],
  templateUrl: './avatar-overlapping-list.presentational-component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarOverlappingListPresentationalComponent {
  @Input() avatars!: AvatarOverlapListViewModel[];
}
