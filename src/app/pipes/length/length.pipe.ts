import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'length' })
export class LengthPipe implements PipeTransform {
  transform(value: unknown[]): number {
    if (value) {
      return value.length;
    }
    return 0;
  }
}
