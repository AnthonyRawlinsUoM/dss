import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeBatchFilter'
})
export class TimeBatchFilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
