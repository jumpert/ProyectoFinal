import { catchError, Observable, of, tap } from 'rxjs';

import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  
  private userUrl = 'http://localhost:3000/api/v1/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }

  // GET user from mock DB
  getUser(id: number): Observable<User> {
    const url = `${this.userUrl}/${id}`;
    return this.http.get<User>(url).pipe(
      tap(_ => this.log(`fetched user id=${id}`)),
      catchError(this.handleError<User>(`getUser id=${id}`))
    );
  }

   // GET users from  DB
   getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.userUrl).pipe(
      tap(_ => this.log('fetched users')),
      catchError(this.handleError<User[]>('getUsers',[]))
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
    console.log(`UserService: ${message}`);
  }
} 
