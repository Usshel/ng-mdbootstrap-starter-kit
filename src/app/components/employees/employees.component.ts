import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { MembersModel } from '../../models/members.model';
import { TeamsService } from '../../services/teams.service';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees',
  styleUrls: ['./employees.component.scss'],
  templateUrl: './employees.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeesComponent {
  readonly employees$: Observable<MembersModel[]> =
    this._employeesService.getAllEmployes();
  constructor(private _employeesService: EmployeesService) {}
}
