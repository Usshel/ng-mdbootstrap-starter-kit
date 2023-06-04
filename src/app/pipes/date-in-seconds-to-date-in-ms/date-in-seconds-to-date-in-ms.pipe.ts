import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateInSecondsToDateInMS' })
export class DateInSecondsToDateInMsPipe implements PipeTransform {
  transform(value: number): string {
    const dateInSeconds = new Date(value);
    const dateInMiliSeconds = dateInSeconds.getTime() * 1000;
    return `${dateInMiliSeconds}`;
  }
}
