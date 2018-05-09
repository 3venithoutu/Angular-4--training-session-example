import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<string>, args: string): Array<string> {
    array.sort((a:any,b:any) => {
      var a1 = a.courseName.toUpperCase();
      var b1 = b.courseName.toUpperCase();
      if(a1 < b1 ) {
        return -1;
      }else if(a1 > b1) {
        return 1;
      } else {
        return 0;
      }
    });
    return array;
  }

}
