import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { ShoppingCartService } from '../services/shopping-cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product!: Product;
  constructor(private scService: ShoppingCartService) {}
  ngOnInit(): void {
    throw new Error('Sin implementar.');
  }

  addToCart(): void {
    const cartItem = this.products2CartItems(this.product);
    this.scService.addItem(cartItem);
  }
  products2CartItems(product: Product): CartItem{
    const {price, name, imageUrl} = product;
    const id = 999;
    const quantity = 1;
    const description = "";
    return {price, name, imageUrl, id, quantity, description};
  }

}
