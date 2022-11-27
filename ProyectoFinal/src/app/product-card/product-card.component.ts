import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { CartItemService } from '../services/cart-item.service';
import { ShoppingCartService } from '../services/shopping-cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {

  swipeStartXPos?: number = undefined;

  // NGB Carousel reference and config
  @ViewChild('ngcarousel', { static: false }) ngCarousel!: NgbCarousel;
  
  showNavigationArrows = false;
  showNavigationIndicators = false;
  @Input() items: CartItem[] = [];
  @Input() product!: Product;
  constructor(public cartItemService: CartItemService, private scService: ShoppingCartService, config: NgbCarouselConfig) {
    config.interval = 4000 ;
    config.showNavigationIndicators = false;
    config.showNavigationArrows = true;
  }
  ngOnInit(): void {
    this.getItems();
  }

  getItems():void {
    this.cartItemService.getItems()
      .subscribe(items => this.items = items);
  }

  addToCart(): void {
    const cartItem = this.products2CartItems(this.product);
    this.scService.addItem(cartItem);
  }
  products2CartItems(product: Product): CartItem{
    const {price, name, imageSrc} = product;
    const id = 999;
    const quantity = 1;
    const description = "";
    const type = "";
    return {type, imageSrc,name, price, quantity, description, id};
  }

  captureSwipeStart($event: TouchEvent) {
    this.swipeStartXPos = $event.changedTouches[1].clientX; //Lo que hace esto es obtener la coordenada x del punto de contacto (touch) en relacion a la ventana grafica
  }

  swipePost($event: TouchEvent) {
    if (this.swipeStartXPos === undefined) {
      return;
    }

    /*Obtiene la diferencia del punto donde el usurio empezo a tocar la pantalla, y donde dejo de tocarla*/
    const swipeFinalXPos = $event.changedTouches[0].clientX;
    const xDifference = swipeFinalXPos - this.swipeStartXPos; 

    if (Math.abs(xDifference) > 70) { 
      if (xDifference < 0) { 
        this.ngCarousel.next();
      } else { 
        this.ngCarousel.prev();
      }
    }

    this.swipeStartXPos = undefined; 
  }

}
