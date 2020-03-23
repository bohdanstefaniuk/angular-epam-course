import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(values: any, orderBy: string, orderAsc: boolean): any {
    return values.sort((a, b) => {
        if (a[orderBy] < b[orderBy] && orderAsc) {
          return -1;
        }
        if (a[orderBy] > b[orderBy] && orderAsc) {
          return 1;
        }
        return 0;
    });
  }
}
