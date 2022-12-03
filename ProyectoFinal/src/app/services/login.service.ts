import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private router: Router) {}

  get logStatus() {
    return this.loggedIn.asObservable();
  }

  //set loggedIn true
  set logIn(data: boolean){
    this.loggedIn.next(true);
  }

  set logOut(data: boolean) {
    this.loggedIn.next(false);
  }

  redirectToHome(): void {
    this.router.navigate(['/']);
  }
}
