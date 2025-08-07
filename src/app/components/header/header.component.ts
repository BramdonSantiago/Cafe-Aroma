import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen: boolean = false;

  constructor(private cartService: CartService) {}

  menu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  showCart() {
    this.cartService.showCart();
  }
}
