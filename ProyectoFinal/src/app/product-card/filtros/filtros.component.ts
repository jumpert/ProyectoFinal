import { ChangeDetectionStrategy, Component, OnInit, Output } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartItemService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrls: ['./filtros.component.css'],
})
export class FiltrosComponent implements OnInit {
  @Output() items: CartItem[] = [];

  constructor(public cartItemService: CartItemService) { }

  ngOnInit(): void {
  }


  public getItemsByType(type: string): void {
    this.cartItemService.getItemsByType(type)
      .subscribe(items => this.items = items);
      console.log(this.items.length);
  }


}
