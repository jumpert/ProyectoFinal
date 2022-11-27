import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { User } from '../models/user';
import { CartItemService } from '../services/cart-item.service';
import { ShoppingCartService } from '../services/shopping-cart.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  public cartItems: CartItem[] = [];
  public user?: User;
  public ownCart?: CartItem[]=[];
  @Output() toggleCartVisibility = new EventEmitter<void>();
  title: string = "Carrito";
  endMsg: string = "Finalizar Compra";

  constructor(public cartItemService: CartItemService, public shoppingCartService: ShoppingCartService, public uS: UserService) { }
  
  ngOnInit(): void {
    this.getItems();
    this.getUser();
  }

  showItems = true;
  onCartClicked(): void {
    this.toggleCartVisibility.emit();
  }

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

  getItems():void {
    this.cartItemService.getItems()
      .subscribe(Items => this.cartItems = Items);
  }

  toggleItemVisibility():void {
    this.showItems = !this.showItems;
  }

  checkout(): void {
    this.cartItems = [];
  }

  getUser(): void {
    this.uS.getUser(1)
      .subscribe(user => this.user = user);
  }
}
