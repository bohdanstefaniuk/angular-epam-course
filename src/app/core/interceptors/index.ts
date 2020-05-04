import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { PerformanceInterceptor, UrlElements } from './performance.interceptor';

const urlElementsValues =  new Array<string>();
urlElementsValues.push('products');
urlElementsValues.push('orders');

export const interceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: PerformanceInterceptor,
    multi: true
  },
  {
    provide: UrlElements,
    useValue: urlElementsValues
  }
];
