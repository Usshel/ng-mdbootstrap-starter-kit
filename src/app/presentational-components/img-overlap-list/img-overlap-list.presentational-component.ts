import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Component({
  selector: 'img-overlap-list-presentational',
  styleUrls: ['./img-overlap-list.presentational-component.scss'],
  templateUrl: './img-overlap-list.presentational-component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgOverlapListPresentationalComponent {
  private _imageUrl!: string;
  @Input() set imageUrl(value: string) {
    this._imageUrl = value;
    this._imageUrlSubject.next(value);
  }
  private _imageUrlSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>(this._imageUrl);
  public imageUrl$: Observable<string> = this._imageUrlSubject.asObservable();
}
// pliki check 1 and 2 .png files from desktop in directory viewModel
// HIGHER MODEL IN DUMMY COMPONENT IS SO BAD
// pytanie w takim wypadku nie mozna zrobić
