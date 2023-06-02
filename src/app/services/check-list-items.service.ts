import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChecklistItemModel } from '../models/checklist-item.model';

@Injectable({ providedIn: 'root' })
export class CheckListItemsService {
  getAllChecklistItems(): Observable<ChecklistItemModel[]> {
    return this._httpClient.get<ChecklistItemModel[]>(
      'https://63810e439440b61b0d10b7c7.mockapi.io/checklist-items'
    );
  }
  constructor(private _httpClient: HttpClient) {}
}
