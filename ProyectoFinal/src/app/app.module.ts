import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item.component';
import { LoginComponent } from './login/login.component';
import { UseButtonComponent } from './use-button/use-button.component';
import { ShoppingCartHeaderComponent } from './shopping-cart/shopping-cart-header/shopping-cart-header.component';
import { CartItemService } from './services/cart-item.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    LoginComponent,
    UseButtonComponent,
    ShoppingCartHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CartItemService,
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
