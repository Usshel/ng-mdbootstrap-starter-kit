import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { MembersModel } from '../../models/members.model';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-employees',
  styleUrls: ['./employees.component.scss'],
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
  readonly employees$: Observable<MembersModel[]> =
    this._teamsService.getAllEmployes();

  constructor(private _teamsService: TeamsService) {}
}
