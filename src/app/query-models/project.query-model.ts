import { MembersModel } from '../models/members.model';

export interface ProjectQueryModel {
  readonly id: string;
  readonly name: string;
  readonly percentage: number;
  readonly description: string;
  readonly startDate: number;
  readonly dueDate: number;
  readonly visibility: string;
  readonly assignees: MembersModel[];
}
