import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {

  private itemsUrl = 'http://localhost:3000/api/v1/items';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor( private http: HttpClient) { }

  // GET item from DB
  getItem(id: number): Observable<CartItem> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<CartItem>(url).pipe(
      tap(_ => this.log(`fetched item id=${id}`)),
      catchError(this.handleError<CartItem>(`getItem id=${id}`))
    );
  }

  // GET item from DB
  getItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.itemsUrl).pipe(
      tap(_ => this.log('fetched items')),
      catchError(this.handleError<CartItem[]>('getItems'))
    );
  }

  // GET item by type from DB
  getItemsByType(type: string): Observable<CartItem[]> {
    const url = `${this.itemsUrl}/type/${type}`;
    return this.http.get<CartItem[]>(url).pipe(
      tap(_ => this.log(`fetched items by type=${type}`)),
      catchError(this.handleError<CartItem[]>(`getItemsByType type=${type}`))
    );
  }
  

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
 

  // TODO: implement better logging mechanism
  private log(message: string) {
    console.log(`CartItemService: ${message}`);
  }

}
