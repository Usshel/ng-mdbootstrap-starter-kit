import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'length' })
export class LengthPipe implements PipeTransform {
  transform(value: unknown[]): unknown {
    if(value){
      return value.length
    }
    return value
  }
}
