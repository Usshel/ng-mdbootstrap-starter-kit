import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TeamModel } from '../../models/team.model';
import { MembersModel } from '../../models/members.model';
import { TeamsService } from '../../services/teams.service';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.scss'],
  templateUrl: './home.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly teams$: Observable<TeamModel[]> = this._teamsService
    .getAllTeams()
    .pipe(map((teams) => teams));
  readonly employees$: Observable<MembersModel[]> =
    this._employeesService.getAllEmployes();
  constructor(
    private _teamsService: TeamsService,
    private _employeesService: EmployeesService
  ) {}
}
