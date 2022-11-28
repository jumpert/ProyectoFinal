import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn = new BehaviorSubject<boolean>(true);
  loggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) {}

  logIn(): void {
    this.loggedIn.next(true);
    this.redirectToHome();
  }

  logOut(): void {
    this.loggedIn.next(false);
    this.redirectToHome();
  }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }
}
