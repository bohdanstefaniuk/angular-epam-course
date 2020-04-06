import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { retry, share, catchError } from 'rxjs/operators';

import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private baseUrl = 'http://localhost:3000/orders'

  constructor(
    private http: HttpClient
  ) {}

  addOrder(order: Order): Observable<Order> {
    const json = JSON.stringify(order);
    const options = {
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    };
    return this.http
      .post<Order>(this.baseUrl, json, options)
      .pipe(
        retry(2),
        share(),
        catchError(this.errorHandler)
      )
  }

  getOrders(): Observable<Array<Order>> {
    return this.http
      .get<Array<Order>>(this.baseUrl)
      .pipe(
        retry(2),
        share(),
        catchError(this.errorHandler)
      );
  }

  private errorHandler(error: HttpErrorResponse) {
		if (error.error instanceof Error) {
			console.error('An error occurred:', error.error.message); 
		} else {
			console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
		}
		return throwError('Something bad happened; please try again later.');
	}
}
