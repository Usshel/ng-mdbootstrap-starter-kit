import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { TeamModel } from '../../models/team.model';
import { MembersModel } from '../../models/members.model';
import { TeamsWithEmployeesQueryModel } from '../../query-models/teams-with-employees.query-model';
import { ProjectModel } from '../../models/project.model';
import { TeamsService } from '../../services/teams.service';
import { EmployeesService } from '../../services/employees.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-team',
  styleUrls: ['./team.component.scss'],
  templateUrl: './team.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamComponent {
  readonly teams$: Observable<TeamModel[]> = this._teamsService
    .getAllTeams()
    .pipe(shareReplay(1));
  readonly employees$: Observable<MembersModel[]> =
    this._employeesService.getAllEmployes();

  readonly teamPageId$: Observable<string> = combineLatest([
    this._activatedRoute.params,
    this.teams$,
  ]).pipe(
    map(([params, teams]) => {
      const properParams: string = `${Math.min(
        Math.max(params['teamId'], 1),
        teams.length
      )}`;
      return properParams;
    }),
    tap((params) => this._navigateToProperTeam(params))
  );

  readonly pageTeam$: Observable<TeamModel | null> = combineLatest([
    this.teams$,
    this.teamPageId$,
  ]).pipe(
    map(([teams, pageTeamId]) => {
      if (pageTeamId) {
        const foundTeam = teams.find((team) => team.id === pageTeamId);
        return foundTeam || null;
      }
      return null;
    })
  );

  readonly pageTeamWithAvatars$: Observable<TeamsWithEmployeesQueryModel | null> =
    combineLatest([this.pageTeam$, this.employees$]).pipe(
      map(([teams, employees]) =>
        this._mapTeamToTeamWithEmployees(teams, employees)
      )
    );

  constructor(
    private _teamsService: TeamsService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _employeesService: EmployeesService
  ) {}

  private _navigateToProperTeam(params: string): void {
    this._router.navigate(['/teams/' + params]);
  }

  private _mapTeamToTeamWithEmployees(
    pageTeam: TeamModel | null,
    employees: MembersModel[]
  ): TeamsWithEmployeesQueryModel | null {
    const employeesMap = employees.reduce((a, c) => {
      return { ...a, [c.id]: c };
    }, {}) as Record<string, MembersModel>;
    if (pageTeam) {
      return {
        name: pageTeam.name,
        description: pageTeam.description,
        projects: pageTeam.projects,
        employees: pageTeam.members.map((member) => ({
          id: employeesMap[member.id].id,
          imageUrl: employeesMap[member.id].avatarUrl,
        })),
        id: pageTeam.id,
        members: pageTeam.members,
      };
    }
    return null;
  }
}
