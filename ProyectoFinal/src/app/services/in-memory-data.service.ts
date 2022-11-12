import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { CartItem } from '../models/cart-item';
import { User } from '../user/user';



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
        price: 80,
        quantity: 2,
        description: "Manzanas rojas de la mejor calidad de la zona. 1kg",
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
        description: "El intenso sabor del chocolate, en su presentación de 100g"
      }
    ];

    const users: User[] = [
      {id: 0, firstName: 'admin', email:'admin@starmarket.com', password: 'admin123', profileImg: '../../assets/profile-pics/admin.jpg'},
      {id: 1, firstName: 'user1', email: 'user1@gmail.com', password: 'user1123', profileImg: '../../assets/profile-pics/user1.jpg'},
      {id: 2, firstName: 'user2', email: 'user2@gmail.com', password: 'user2123', profileImg: '../../assets/profile-pics/user2.jpg'}
    ]
    return {items, users};
  }
 
}
