import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamModel } from '../models/team.model';
import { MembersModel } from '../models/members.model';
import { ProjectModel } from '../models/project.model';
import { ChecklistItemModel } from '../models/checklist-item.model';
import { TaskModel } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TeamsService {
  constructor(private _httpClient: HttpClient) {}

  getAllTeams(): Observable<TeamModel[]> {
    return this._httpClient.get<TeamModel[]>(
      'https://646f899709ff19b120876fb8.mockapi.io/teams'
    );
  }

  //create models for them
  getAllProjects(): Observable<ProjectModel[]> {
    return this._httpClient.get<ProjectModel[]>(
      'https://646f899709ff19b120876fb8.mockapi.io/projects'
    );
  }

  getAllChecklistItems(): Observable<ChecklistItemModel[]> {
    return this._httpClient.get<ChecklistItemModel[]>(
      'https://63810e439440b61b0d10b7c7.mockapi.io/checklist-items'
    );
  }

  getAllEmployes(): Observable<MembersModel[]> {
    return this._httpClient.get<MembersModel[]>(
      'https://646f899709ff19b120876fb8.mockapi.io/employees'
    );
  }

  getAllTasks(): Observable<TaskModel[]> {
    return this._httpClient.get<TaskModel[]>(
      'https://63810e439440b61b0d10b7c7.mockapi.io/tasks'
    );
  }
}
// One Service created with a thought due fact that, project will not being more extending in features like post,delete for each endpoint.
