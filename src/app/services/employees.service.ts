import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MembersModel } from '../models/members.model';

@Injectable({ providedIn: 'root' })
export class EmployeesService {
  getAllEmployes(): Observable<MembersModel[]> {
    return this._httpClient.get<MembersModel[]>(
      'https://646f899709ff19b120876fb8.mockapi.io/employees'
    );
  }
  constructor(private _httpClient: HttpClient) {}
}
