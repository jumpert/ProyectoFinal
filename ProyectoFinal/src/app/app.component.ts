import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProyectoFinal';

  isCartVisible = false;
  isMenuOpened = true;

  toggleCartVisibility(): void {
    this.isCartVisible = !this.isCartVisible;
  }

  hideMenu(): void {
    this.isMenuOpened = false;
  }
}
