import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFinal';
  public loggedIn$: Observable<boolean>;
  isCartVisible = false;
  isMenuOpened = true;
 constructor(public loginService: LoginService) {
    this.loggedIn$ = loginService.logStatus;
  } 
 
  toggleCartVisibility(): void {
    this.isCartVisible = !this.isCartVisible;
  }

  hideMenu(): void {
    this.isMenuOpened = false;
  }
  
}
