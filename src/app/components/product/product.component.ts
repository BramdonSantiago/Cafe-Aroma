import { Component, Input } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-product',
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product!: any;

  constructor(private cartService: CartService) {}

  showCart() {
    this.cartService.showCart();
  }
}
