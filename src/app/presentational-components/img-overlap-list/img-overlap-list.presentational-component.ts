import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { MembersModel } from 'src/app/models/members.model';
import { PersonViewModel } from 'src/app/view-models/person/person.view-model';

@Component({
  selector: 'img-overlap-list-presentational',
  styleUrls: ['./img-overlap-list.presentational-component.scss'],
  templateUrl: './img-overlap-list.presentational-component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgOverlapListPresentationalComponent {
  private _persons!: PersonViewModel[];
  @Input() set persons(value: MembersModel[]) {
    this._persons! = value.map((member) => ({
      id: member.id,
      name: member.firstName,
      imageUrl: member.avatarUrl,
      secondName: member.lastName,
      position: member.position,
    }));
    this._personSubject.next(this._persons);
  }
  private _personSubject: BehaviorSubject<PersonViewModel[]> =
    new BehaviorSubject<PersonViewModel[]>(this._persons);
  public person$: Observable<PersonViewModel[]> =
    this._personSubject.asObservable();
}
// pliki check 1 and 2 .png files from desktop in directory viewModel
