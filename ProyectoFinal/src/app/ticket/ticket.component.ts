import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { CartItemService } from '../services/cart-item.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  public cartItems: CartItem[] = [];
  endMsg: string = "Pagar";
  constructor(public cartItemService: CartItemService) { }
  CurrentDate: Date = new Date();
  LocalDate: String = new Date().toLocaleDateString();
  LocalTime: String = new Date().toLocaleTimeString();
  ngOnInit(): void {
    this.getItems();
  }

  get total(): number {

    return this.cartItems.reduce((acc, { price }) => (acc += price), 0);
  }

  getItems():void {
    this.cartItemService.getItems()
      .subscribe(Items => this.cartItems = Items);
  }

  checkout(): void {
    this.cartItems = [];
  }

}
