import { MembersModel } from './members.model';
import { ProjectModel } from './project.model';

export interface TeamModel {
  readonly name: string;
  readonly description: string;
  readonly members: MembersModel[];
  readonly projects: ProjectModel[];
  readonly id: string;
}
