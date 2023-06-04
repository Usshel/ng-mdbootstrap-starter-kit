import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { TeamModel } from '../../models/team.model';
import { TeamsService } from '../../services/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamsComponent {
  readonly teams$: Observable<TeamModel[]> = this._teamsService
    .getAllTeams()
    .pipe(map((teams) => teams));

  constructor(private _teamsService: TeamsService) {}
}
