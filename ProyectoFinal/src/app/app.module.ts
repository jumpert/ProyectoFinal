import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item.component';

import { UseButtonComponent } from './use-button/use-button.component';
import { ShoppingCartHeaderComponent } from './shopping-cart/shopping-cart-header/shopping-cart-header.component';
import { CartItemService } from './services/cart-item.service';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { InputsFieldComponent } from './inputs-field/inputs-field.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { NavToolComponent } from './nav-tool/nav-tool.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';



@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ShoppingCartHeaderComponent,
    ProductCardComponent,
    NavToolComponent,
    PageNotFoundComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    SharedModule,
    
  ],
  exports: [
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    ShoppingCartHeaderComponent,
    ProductCardComponent,
    NavToolComponent,
    PageNotFoundComponent,
    UserComponent,
  ],
  providers: [
    CartItemService,
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }