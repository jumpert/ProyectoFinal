import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CartItem } from '../models/cart-item';
import { Product } from '../models/product';
import { CartItemService } from '../services/cart-item.service';
import { ShoppingCartService } from '../services/shopping-cart.service';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
    config.interval = 0;
  }
  ngOnInit(): void {
    this.getItem();
  }

  getItem():void {
    this.cartItemService.getItems()
      .subscribe(Items => this.items = Items);
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
  captureSwipeStart($event: TouchEvent) {
    this.swipeStartXPos = $event.changedTouches[0].clientX; //Lo que hace esto es obtener la cordenada x del punto de contacto (touch) en relacion a la ventana grafica
  }

  swipePost($event: TouchEvent) {
    if (this.swipeStartXPos === undefined) {
      return;
    }

    /*Obtiene la diferencia del punto donde el usurio empezo a tocar la pantalla, y donde dejo de tocarla*/
    const swipeFinalXPos = $event.changedTouches[0].clientX;
    const xDifference = swipeFinalXPos - this.swipeStartXPos; 

    if (Math.abs(xDifference) > 70) { //Si la diferencia es mayor a 70 se mueve la imagen/slide
      if (xDifference < 0) { // Si la diferencia es negatica, se mueve a la derecha.
        this.ngCarousel.next();
      } else { //Si la diferencia es positivia se mueve a la izquierda.
        this.ngCarousel.prev();
      }
    }

    this.swipeStartXPos = undefined; //Setea el punto donde el empieza a tocar.
  }

}
