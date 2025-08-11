import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '@services/cart/cart.service';
import { QuantityControlComponent } from '@components/quantity-control/quantity-control.component';

@Component({
  selector: 'app-quickcart',
  imports: [CommonModule, QuantityControlComponent],
  templateUrl: './quickcart.component.html',
  styleUrl: './quickcart.component.scss'
})
export class QuickCartComponent {
  products = [
    {
      id: 1,
      name: 'Chocolate Amargo 85%',
      image: '/assets/images/cafe-1.jpeg',
      price: 8900,
      currency: 'USD',
      quantity: 1,
      minQuantity: 1,
      maxQuantity: 10,
      quantitySelected: signal(1)
    },
    {
      id: 2,
      name: 'Trufas Belgas',
      image: '/assets/images/cafe-2.jpeg',
      price: 12900,
      currency: 'USD',
      quantity: 1,
      minQuantity: 1,
      maxQuantity: 6,
      quantitySelected: signal(1)
    },
    {
      id: 3,
      name: 'Caja de Bombones Mixtos',
      image: '/assets/images/cafe-3.jpeg',
      price: 17900,
      currency: 'USD',
      quantity: 2,
      minQuantity: 1,
      maxQuantity: 4,
      quantitySelected: signal(1)
    },
    {
      id: 4,
      name: 'Chocolate con Almendras',
      image: '/assets/images/cafe-4.jpeg',
      price: 7500,
      currency: 'USD',
      quantity: 1,
      minQuantity: 1,
      maxQuantity: 8,
      quantitySelected: signal(1)
    },
    {
      id: 5,
      name: 'Chocolate Blanco Cremoso',
      image: '/assets/images/cafe-5.jpeg',
      price: 9800,
      currency: 'USD',
      quantity: 1,
      minQuantity: 1,
      maxQuantity: 5,
      quantitySelected: signal(1)
    },
    {
      id: 6,
      name: 'Chocolate con Naranja',
      image: '/assets/images/cafe-6.jpeg',
      price: 10500,
      currency: 'USD',
      quantity: 1,
      minQuantity: 1,
      maxQuantity: 6,
      quantitySelected: signal(1)
    },
    {
      id: 7,
      name: 'Brownies de Chocolate',
      image: '/assets/images/cafe-7.jpeg',
      price: 16200,
      currency: 'USD',
      quantity: 1,
      minQuantity: 1,
      maxQuantity: 3,
      quantitySelected: signal(1)
    },
    {
      id: 8,
      name: 'Chocolate con Menta',
      image: '/assets/images/cafe-8.jpeg',
      price: 9900,
      currency: 'USD',
      quantity: 1,
      minQuantity: 1,
      maxQuantity: 4,
      quantitySelected: signal(1)
    },
    {
      id: 9,
      name: 'Barra con Avellanas',
      image: '/assets/images/cafe-9.jpeg',
      price: 8800,
      currency: 'USD',
      quantity: 1,
      minQuantity: 1,
      maxQuantity: 5,
      quantitySelected: signal(1)
    },
    {
      id: 10,
      name: 'Chocolate Artesanal Mexicano',
      image: '/assets/images/chocolate10-min.jpg',
      price: 11400,
      currency: 'USD',
      quantity: 1,
      minQuantity: 1,
      maxQuantity: 10,
      quantitySelected: signal(1)
    }
  ];

  isVisible = false;

  minQuantity: number = 1;
  maxQuantity: number = 10;
  totalCart : number = 0;

  totalBuy = computed(() =>
    this.products.reduce((total, product) =>  total + (product.price * product.quantitySelected()), 0)
  );

  constructor(private cartService: CartService) {
    this.cartService.cartVisible$.subscribe((visible) => {
      this.isVisible = visible;
    });
  }

  removeProduct(id: number) {
    this.products = this.products.filter(product => product.id !== id);
  }

  closeCart() {
    this.cartService.hideCart();
  }
}

