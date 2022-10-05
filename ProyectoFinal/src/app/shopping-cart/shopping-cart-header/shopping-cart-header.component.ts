import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart-header',
  templateUrl: './shopping-cart-header.component.html',
  styleUrls: ['./shopping-cart-header.component.css']
})
export class ShoppingCartHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}
}
