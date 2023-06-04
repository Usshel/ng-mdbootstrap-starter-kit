import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { filter, map, shareReplay, tap } from 'rxjs/operators';
import { ChecklistItemModel } from '../../models/checklist-item.model';
import { TaskModel } from '../../models/task.model';
import { ProjectModel } from '../../models/project.model';
import { MembersModel } from '../../models/members.model';
import { TeamModel } from '../../models/team.model';
import { TeamsWithEmployeesQueryModel } from '../../query-models/teams-with-employees.query-model';
import { ProjectWithTasksQueryModel } from '../../query-models/project-with-tasks.query-model';
import { ProjectsForEmployeeComponentQueryModel } from '../../query-models/projects-for-employee-component.query-model';
import { EmployeesService } from '../../services/employees.service';
import { TeamsService } from '../../services/teams.service';
import { ProjectsService } from '../../services/projects.service';
import { TasksService } from '../../services/tasks.service';
import { CheckListItemsService } from '../../services/check-list-items.service';

@Component({
  selector: 'app-employee',
  styleUrls: ['./employee.component.scss'],
  templateUrl: './employee.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeComponent {
  readonly checkListItems$: Observable<ChecklistItemModel[]> =
    this._checkListItemsService.getAllChecklistItems();

  readonly tasks$: Observable<TaskModel[]> = this._tasksService.getAllTasks();

  readonly projects$: Observable<ProjectModel[]> = this._projectsService
    .getAllProjects()
    .pipe(shareReplay(1));

  readonly employees$: Observable<MembersModel[]> = this._employeesService
    .getAllEmployes()
    .pipe(shareReplay(1));

  readonly teams$: Observable<TeamModel[]> = this._teamsService
    .getAllTeams()
    .pipe();

  readonly employeePageId$: Observable<string> = combineLatest([
    this._activatedRoute.params,
    this.employees$,
  ]).pipe(
    map(([params, employees]) => {
      const properParams: string = `${Math.min(
        Math.max(params['employeeId'], 1),
        employees.length
      )}`;
      return properParams;
    }),
    tap((params) => this._navigateToProperEmployee(params))
  );

  readonly pageEmployee$: Observable<MembersModel | null> = combineLatest([
    this.employees$,
    this.employeePageId$,
  ]).pipe(
    shareReplay(1),
    map(
      ([employees, employeeId]) =>
        employees.find((employee) => employee.id === employeeId) ?? null
    )
  );
  readonly projectsOfEmployee$: Observable<ProjectModel[] | null> =
    combineLatest([this.projects$, this.pageEmployee$]).pipe(
      map(([projects, employee]) => {
        if (employee) {
          return projects.filter((project) =>
            project.assignees.find((member) => member.id === employee.id)
          );
        }
        return null;
      })
    );

  readonly teamOfPageEmployee$: Observable<TeamModel[] | null> = combineLatest([
    this.teams$,
    this.pageEmployee$,
  ]).pipe(
    map(([teams, employee]) =>
      this._filterTeamsForPageEmployee(teams, employee)
    )
  );

  readonly teamsWithMappedEmployees$: Observable<
    TeamsWithEmployeesQueryModel[] | null
  > = combineLatest([this.teamOfPageEmployee$, this.employees$]).pipe(
    map(([teams, employees]) =>
      this._mapTeamsToTeamsWithEmployees(teams, employees)
    )
  );

  readonly projectsOfEmployeeAndTasksMapped$: Observable<
    ProjectWithTasksQueryModel[] | null
  > = combineLatest([this.projectsOfEmployee$, this.tasks$]).pipe(
    map(([projects, tasks]) => this._mapTasksToProjects(projects, tasks))
  );
  readonly projectsWithChecklist$: Observable<
    ProjectsForEmployeeComponentQueryModel[] | null
  > = combineLatest([
    this.projectsOfEmployeeAndTasksMapped$,
    this.checkListItems$,
  ]).pipe(
    map(([projects, checkListItems]) =>
      this._mapChecklistToProjectsWithTasks(projects, checkListItems)
    )
  );
  private _tabSwitcherSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);
  public tabSwitcher$: Observable<boolean> =
    this._tabSwitcherSubject.asObservable();

  constructor(
    private _employeesService: EmployeesService,
    private _activatedRoute: ActivatedRoute,
    private _teamsService: TeamsService,
    private _router: Router,
    private _projectsService: ProjectsService,
    private _tasksService: TasksService,
    private _checkListItemsService: CheckListItemsService
  ) {}

  private _navigateToProperEmployee(params: string): void {
    this._router.navigate(['/employee/' + params]);
  }

  private _filterTeamsForPageEmployee(
    teams: TeamModel[],
    employee: MembersModel | null
  ): TeamModel[] | null {
    return teams.filter((team) => {
      if (employee) {
        return team.members.some((member) => member.id === employee.id);
      }
      return null;
    });
  }

  private _mapTeamsToTeamsWithEmployees(
    teamsOfEmployee: TeamModel[] | null,
    employees: MembersModel[]
  ): TeamsWithEmployeesQueryModel[] | null {
    const employeesMap = employees.reduce((a, c) => {
      return { ...a, [c.id]: c };
    }, {}) as Record<string, MembersModel>;
    if (teamsOfEmployee) {
      return teamsOfEmployee?.map((team) => ({
        name: team.name,
        description: team.description,
        projects: team.projects,
        employees: team.members.map((member) => ({
          id: employeesMap[member.id].id,
          imageUrl: employeesMap[member.id].avatarUrl,
        })),
        id: team.id,
        members: team.members,
      }));
    }
    return null;
  }

  private _mapTasksToProjects(
    projects: ProjectModel[] | null,
    tasks: TaskModel[]
  ): ProjectWithTasksQueryModel[] | null {
    if (projects) {
      return projects?.map((project) => ({
        id: project.id,
        name: project.name,
        percentage: project.percentage,
        description: project.description,
        startDate: project.startDate,
        dueDate: project.dueDate,
        visibility: project.visibility,
        assignees: project.assignees,
        tasks: tasks.filter((task) => task.projectId === project.id),
      }));
    }
    return null;
  }

  private _mapChecklistToProjectsWithTasks(
    projects: ProjectWithTasksQueryModel[] | null,
    checkListItems: ChecklistItemModel[]
  ): ProjectsForEmployeeComponentQueryModel[] | null {
    const checklistMap = checkListItems.reduce((a, c) => {
      return { ...a, [c.id]: c };
    }, {}) as Record<string, ChecklistItemModel>;
    if (projects) {
      return projects.map((project) => ({
        id: project.id,
        name: project.name,
        percentage: project.percentage,
        description: project.description,
        startDate: project.startDate,
        dueDate: project.dueDate,
        visibility: project.visibility,
        assignees: project.assignees,
        tasks: project.tasks.map((task) => ({
          name: task.name,
          description: task.description,
          startDate: task.startDate,
          dueDate: task.dueDate,
          checkList: task.checkList.map(
            (checklistId) => checklistMap[checklistId]
          ),
          assigneeIds: task.assigneeIds,
          projectId: task.projectId,
          id: task.id,
        })),
      }));
    }
    return null;
  }

  public onClickToggleProjects(): void {
    this._tabSwitcherSubject.next(false);
  }
  public onClickToggleTeams(): void {
    this._tabSwitcherSubject.next(true);
  }
}
