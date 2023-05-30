import { Pipe, PipeTransform } from '@angular/core';
import { ChecklistItemModel } from 'src/app/models/checklist-item.model';

@Pipe({ name: 'checkListItemsDone' })
export class CheckListItemsDonePipe implements PipeTransform {
  transform(value: ChecklistItemModel[]): ChecklistItemModel[] {
    return value.filter((item) => item.isDone === true);
  }
}
