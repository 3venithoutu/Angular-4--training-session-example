import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {
// value:data on which pipe is applied
  transform(value: number, args: number): number {
    return Math.pow(value,args);
  }

}
