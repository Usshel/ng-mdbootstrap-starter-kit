import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AvatarCardViewModel } from '../../view-models/avatar-card/avatar-card.view-model';

@Component({
  selector: 'avatar-card-presentational',
  styleUrls: ['./avatar-card.presentational-component.scss'],
  templateUrl: './avatar-card.presentational-component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarCardPresentationalComponent implements OnChanges {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() description!: string;
  private _avatarCardSubject: BehaviorSubject<AvatarCardViewModel> =
    new BehaviorSubject<AvatarCardViewModel>({
      imageUrl: this.imageUrl,
      title: this.title,
      description: this.description,
    });
  public avatarCard$: Observable<AvatarCardViewModel> =
    this._avatarCardSubject.asObservable();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['imageUrl'] || changes['title'] || changes['description']) {
      this.setState();
    }
  }
  private setState(): void {
    this._avatarCardSubject.next({
      imageUrl: this.imageUrl,
      title: this.title,
      description: this.description,
    });
  }
}

// this._person! = {
//   id: value.id,
//   name: value.firstName,
//   imageUrl: value.avatarUrl,
//   secondName: value.lastName,
//   position: value.position,
// };
// this._personSubject.next({
//   id: value.id,
//   name: value.firstName,
//   imageUrl: value.avatarUrl,
//   secondName: value.lastName,
//   position: value.position,
// });
// }
// private _personSubject: BehaviorSubject<PersonViewModel> =
// new BehaviorSubject<PersonViewModel>(this._person);
// public person$: Observable<PersonViewModel> =
// this._personSubject.asObservable();
