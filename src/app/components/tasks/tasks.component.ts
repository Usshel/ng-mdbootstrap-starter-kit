import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, combineLatest, map } from 'rxjs';
import { TaskModel } from '../../models/task.model';
import { MembersModel } from '../../models/members.model';
import { ChecklistItemModel } from '../../models/checklist-item.model';
import { TeamsService } from '../../services/teams.service';
import { TasksWithMembersAndCheckListQueryModel } from 'src/app/query-models/tasks-with-members-and-check-list.query-model';

@Component({
  selector: 'app-tasks',
  styleUrls: ['./tasks.component.scss'],
  templateUrl: './tasks.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent {
  readonly tasks$: Observable<TaskModel[]> = this._teamsService.getAllTasks();

  readonly members$: Observable<MembersModel[]> =
    this._teamsService.getAllEmployes();

  readonly checkList$: Observable<ChecklistItemModel[]> =
    this._teamsService.getAllChecklistItems();

  tasksWithMembersAndCheckList$: Observable<
    TasksWithMembersAndCheckListQueryModel[]
  > = combineLatest([this.tasks$, this.members$, this.checkList$]).pipe(
    map(([tasks, members, checklist]) =>
      this.MapToTasksWithMembersAndCheckList(tasks, members, checklist)
    )
  );

  constructor(private _teamsService: TeamsService) {}

  MapToTasksWithMembersAndCheckList(
    tasks: TaskModel[],
    members: MembersModel[],
    checkList: ChecklistItemModel[]
  ): TasksWithMembersAndCheckListQueryModel[] {
    //change to queryModel!!!!!!!!!!!!!!!!!!!!!!!!!!!
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
      members: task.assigneeIds.map((id) => membersMap[id]),
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
