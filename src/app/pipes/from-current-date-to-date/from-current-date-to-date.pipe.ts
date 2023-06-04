import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'fromCurrentDateToDate' })
export class FromCurrentDateToDatePipe implements PipeTransform {
  transform(value: string): number {
    const today = new Date();
    const dueDate = new Date(value);
    const TimeDiff = Math.floor(
      (dueDate.getTime() - today.getTime()) / 1000 / 60 / 60 / 24
    );
    return TimeDiff;
  }
}
