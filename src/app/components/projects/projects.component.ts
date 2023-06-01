import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProjectModel } from '../../models/project.model';
import { TeamsService } from '../../services/teams.service';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-projects',
  styleUrls: ['./projects.component.scss'],
  templateUrl: './projects.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  readonly projects$: Observable<ProjectModel[]> = this._projectsService
    .getAllProjects()
    .pipe(map((projects) => projects));

  constructor(private _projectsService: ProjectsService) {}
}
