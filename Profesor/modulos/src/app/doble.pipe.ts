import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doble'
})
export class DoblePipe implements PipeTransform {

  transform(value: number, arg: number, arg2: number): any {
    return value * arg + arg2;
  }

}
