import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectModel } from '../models/project.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  getAllProjects(): Observable<ProjectModel[]> {
    return this._httpClient.get<ProjectModel[]>(
      'https://646f899709ff19b120876fb8.mockapi.io/projects'
    );
  }
  constructor(private _httpClient: HttpClient) {}
}
