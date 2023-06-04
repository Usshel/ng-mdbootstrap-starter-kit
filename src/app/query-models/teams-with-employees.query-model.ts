import { MembersModel } from '../models/members.model';
import { ProjectModel } from '../models/project.model';
import { AvatarQueryModel } from './avatar.query-model';

export interface TeamsWithEmployeesQueryModel {
  readonly name: string;
  readonly description: string;
  readonly employees: AvatarQueryModel[];
  readonly projects: ProjectModel[];
  readonly id: string;
  readonly members: MembersModel[];
}
