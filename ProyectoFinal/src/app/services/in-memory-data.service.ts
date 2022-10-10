import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { CartItem } from '../models/cart-item';



@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService extends InMemoryDbService{
  createDb() {
    
    const items: CartItem[] = [
      {
        id: 1,
        imageUrl: "manzanas.jpg",
        name: "Manzanas",
        price: 30,
        quantity: 2,
        description: "Rojas y verdes"
      },
      {
        id: 2,
        imageUrl: "termoStanley.jpg",
        name: "Termo Stanley",
        price: 1500,
        quantity: 1,
        description: "1Litro con tapón cebador"
      },
      {
        id: 3,
        imageUrl: "chocolate.jpg",
        name: "Chocolate Milka",
        price: 150,
        quantity: 20,
        description: "Puro sabor a chocolate"
      }
    ];
    return {items};
  }
 
}
