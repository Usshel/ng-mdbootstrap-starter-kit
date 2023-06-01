import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskModel } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  getAllTasks(): Observable<TaskModel[]> {
    return this._httpClient.get<TaskModel[]>(
      'https://63810e439440b61b0d10b7c7.mockapi.io/tasks'
    );
  }
  constructor(private _httpClient: HttpClient) {}
}
