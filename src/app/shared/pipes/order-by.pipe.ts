import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {
  transform(values: any, orderBy: string, orderAsc: boolean): any {
    return values.sort((a, b) => {
      const first = a[orderBy];
      const second = b[orderBy];
      if (orderAsc) {
        return first < second ? -1 : first > second ? 1 : 0;
      } else {
        return first > second ? -1 : first < second ? 1 : 0;
      }
    });
  }
}
