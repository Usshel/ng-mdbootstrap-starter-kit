import { ChecklistItemModel } from '../models/checklist-item.model';
import { MembersModel } from '../models/members.model';
import { AvatarQueryModel } from './avatar.query-model';

export interface TasksWithMembersAndCheckListQueryModel {
  readonly name: string;
  readonly description: string;
  readonly startDate: number;
  readonly dueDate: number;
  readonly members: AvatarQueryModel[];
  readonly checkListItems: {
    readonly name: string;
    readonly isDone: boolean;
    readonly id: string;
  }[];
  readonly projectId: string;
  readonly id: string;
  readonly percentage: number;
}
