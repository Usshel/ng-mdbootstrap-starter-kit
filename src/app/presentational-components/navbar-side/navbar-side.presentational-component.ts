import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { BehaviorSubject, Observable, asapScheduler, map, tap } from 'rxjs';

@Component({
  selector: 'navbar-side-presentational',
  templateUrl: './navbar-side.presentational-component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarSidePresentationalComponent {
  private _isNavbarToggleSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isNavbarToggle$: Observable<boolean> =
    this._isNavbarToggleSubject.asObservable();

  public toggleNavbar(): void {
    if (this._isNavbarToggleSubject.getValue()) {
      this._isNavbarToggleSubject.next(false);
    } else {
      this._isNavbarToggleSubject.next(true);
    }
  }
}
