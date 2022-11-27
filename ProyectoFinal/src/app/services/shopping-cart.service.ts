import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  private url = 'http://localhost:3000/api/v1/shoppingCart';
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) { }
  cartItems: CartItem[] = []

  get total(): number {
    return this.cartItems.reduce((acc, { price }) => (acc += price), 0);
  }
  /*deleteItem(itemToDelete: CartItem): void {
    this.cartItems = this.cartItems.filter((item) => item !== itemToDelete);
  }*/
  // Delete form MongoDB item
  deleteItem(itemToDelete: CartItem): void {
    const url = `${this.url}/${itemToDelete}`;
    this.http.delete(url, this.httpOptions).subscribe();
    this.cartItems = this.cartItems.filter((item) => item !== itemToDelete);
  }

  get itemsCount(): number {
    return this.cartItems.length;
  }

  addItem(item: CartItem): void {
    this.cartItems = [...this.cartItems, item];
  }


}
