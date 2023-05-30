import { ChecklistItemModel } from '../models/checklist-item.model';
import { MembersModel } from '../models/members.model';

export interface TasksWithMembersAndCheckListQueryModel {
  readonly name: string;
  readonly description: string;
  readonly startDate: number;
  readonly dueDate: number;
  readonly members: {
    readonly id: string;
    readonly firstName: string;
    readonly avatarUrl: string;
    readonly lastName: string;
    readonly position: string;
  }[];
  readonly checkListItems: {
    readonly name: string;
    readonly isDone: boolean;
    readonly id: string;
  }[];
  readonly projectId: string;
  readonly id: string;
  readonly percentage: number;
}
