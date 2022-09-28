import { Component, OnInit, Output } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: CartItem[] = [];
  
  title: string = "Carrito";
  endMsg:string = "Finalizar Compra";
  constructor(public cartItemService: CartItemService) {}
  
  ngOnInit(): void {
    this.getItem();
  }
  
  get total(): number {
    return this.cartItems.reduce((acc, { price }) => (acc += price), 0);
  }
  deleteItem(itemToDelete: CartItem): void {
    this.cartItems = this.cartItems.filter((item) => item !== itemToDelete);
  }
  getItem():void {
    this.cartItemService.getItems()
      .subscribe(Items => this.cartItems = Items);
  }
  
}
