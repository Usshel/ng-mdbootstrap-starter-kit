import { MembersModel } from "./members.model";

export interface ProjectModel {
  readonly id: string;
  readonly name: string;
  readonly percentage:number
  readonly description: string;
  readonly startDate: string;
  readonly dueDate: string;
  readonly visibility: string;
  readonly assignees: MembersModel[];
}
