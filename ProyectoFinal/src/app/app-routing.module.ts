import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TicketComponent } from './ticket/ticket.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent },
  { path: 'home', component: ProductCardComponent },
  { path: 'users', component: UserComponent },
  { path: 'shoppingCart/ticket', component: TicketComponent },
  { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }