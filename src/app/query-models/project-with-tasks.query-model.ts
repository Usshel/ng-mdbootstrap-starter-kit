import { MembersModel } from '../models/members.model';
import { TaskModel } from '../models/task.model';

export interface ProjectWithTasksQueryModel {
  readonly id: string;
  readonly name: string;
  readonly percentage: number;
  readonly description: string;
  readonly startDate: string;
  readonly dueDate: string;
  readonly visibility: string;
  readonly assignees: MembersModel[];
  readonly tasks: TaskModel[];
}
