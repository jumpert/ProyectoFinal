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



@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    UseButtonComponent,
    ShoppingCartHeaderComponent,
    InputsFieldComponent,
    ProductCardComponent,
    NavToolComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [
    CartItemService,
        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
