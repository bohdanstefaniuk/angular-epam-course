import { HttpInterceptor } from '@angular/common/http';
import {
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { InjectionToken, Inject, Injectable } from '@angular/core';

export const UrlElements = new InjectionToken<Array<string>>('UrlElements');

@Injectable({
  providedIn: 'root',
})
export class PerformanceInterceptor implements HttpInterceptor {

  constructor(@Inject(UrlElements) private urlElements: Array<string>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const startDate = new Date();
    return next.handle(req).pipe(
      filter(this.responseFilter),
      map((event: HttpResponse<any>) => this.mapResponse(event, startDate))
    );
  }

  private responseFilter(event: HttpEvent<any>): boolean {
    return event.type === HttpEventType.Response;
  }

  private mapResponse(event: HttpResponse<any>, startDate: Date) {
    const isUrlAccepted = this.urlElements.some(value => event.url.includes(value));
    if (isUrlAccepted) {
      const endDate = new Date();
      const milliseconds = Math.abs(endDate.getTime() - startDate.getTime());
      console.log(`Duration of '${event.url}' request: ${milliseconds} milliseconds`);
    }
    return event;
  }
}
