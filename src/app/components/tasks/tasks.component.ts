import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ChecklistItemModel } from '../../models/checklist-item.model';
import { MembersModel } from '../../models/members.model';
import { TasksWithMembersAndCheckListQueryModel } from '../../query-models/tasks-with-members-and-check-list.query-model';
import { TaskModel } from '../../models/task.model';
import { TeamsService } from '../../services/teams.service';
import { CheckListItemsService } from '../../services/check-list-items.service';
import { EmployeesService } from '../../services/employees.service';
import { TasksService } from '../../services/tasks.service';
import { AvatarCardViewModel } from 'src/app/view-models/avatar-card/avatar-card.view-model';
import { AvatarOverlapListViewModel } from 'src/app/view-models/avatar-overlap-list/avatar-overlap-list.view-model';

@Component({
  selector: 'app-tasks',
  styleUrls: ['./tasks.component.scss'],
  templateUrl: './tasks.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  readonly checkList$: Observable<ChecklistItemModel[]> =
    this._checkListItemsService.getAllChecklistItems();

  readonly tasks$: Observable<TaskModel[]> = this._tasksService.getAllTasks();

  readonly members$: Observable<MembersModel[]> =
    this._employeesService.getAllEmployes();

  readonly tasksWithMembersAndCheckList$: Observable<
    TasksWithMembersAndCheckListQueryModel[]
  > = combineLatest([this.tasks$, this.members$, this.checkList$]).pipe(
    map(([tasks, members, checklist]) =>
      this._mapToTasksWithMembersAndCheckList(tasks, members, checklist)
    )
  );

  constructor(
    private _checkListItemsService: CheckListItemsService,
    private _employeesService: EmployeesService,
    private _tasksService: TasksService
  ) {}

  private _mapToTasksWithMembersAndCheckList(
    tasks: TaskModel[],
    members: MembersModel[],
    checkList: ChecklistItemModel[]
  ): TasksWithMembersAndCheckListQueryModel[] {
    const membersMap = members.reduce((a, c) => {
      return { ...a, [c.id]: c };
    }, {}) as Record<string, MembersModel>;

    const checklistMap = checkList.reduce((a, c) => {
      return { ...a, [c.id]: c };
    }, {}) as Record<string, ChecklistItemModel>;

    return tasks.map((task) => ({
      name: task.name,
      description: task.description,
      startDate: task.startDate,
      dueDate: task.dueDate,
      members: task.assigneeIds.map((id) => ({
        id: membersMap[id].id,
        imageUrl: membersMap[id].avatarUrl,
      })),
      checkListItems: task.checkList.map((item) => checklistMap[item]),
      projectId: task.projectId,
      id: task.id,
      percentage:
        task.checkList
          .map((item) => checklistMap[item])
          .filter((value) => value.isDone === true).length * 33.333,
    }));
  }
}
