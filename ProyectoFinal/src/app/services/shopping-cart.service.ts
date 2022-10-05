import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  
  cartItems: CartItem[] = []

  get total(): number {
    return this.cartItems.reduce((acc, { price }) => (acc += price), 0);
  }
  deleteItem(itemToDelete: CartItem): void {
    this.cartItems = this.cartItems.filter((item) => item !== itemToDelete);
  }

  get itemsCount(): number {
    return this.cartItems.length;
  }

  addItem(item: CartItem): void {
    this.cartItems = [...this.cartItems, item];
  }


}
