import { Component } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { PaginatorComponent } from '../../components/paginator/paginator.component';

@Component({
  selector: 'app-store',
  imports: [ProductComponent, PaginatorComponent],
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})
export class StoreComponent {
  products = [
    {
      id: 1,
      name: 'Chocolate Amargo 85%',
      image: '/assets/images/cafe-6.jpeg',
      price: 8900,
      currency: 'USD',
      category: 'Amargo',
      shortDescription: 'Intenso chocolate oscuro con 85% de cacao puro.',
    },
    {
      id: 2,
      name: 'Trufas Belgas',
      image: '/assets/images/cafe-7.jpeg',
      price: 12900,
      currency: 'USD',
      category: 'Trufas',
      shortDescription: 'Deliciosas trufas belgas con relleno cremoso.',
    },
    {
      id: 3,
      name: 'Caja de Bombones Mixtos',
      image: '/assets/images/cafe-8.jpeg',
      price: 17900,
      currency: 'USD',
      category: 'Bombones',
      shortDescription: 'Variedad de bombones rellenos con sabores únicos.',
    },
    {
      id: 4,
      name: 'Chocolate con Almendras',
      image: '/assets/images/cafe-9.jpeg',
      price: 7500,
      currency: 'USD',
      category: 'Con frutos secos',
      shortDescription: 'Crujientes almendras en chocolate suave y dulce.',
    },
    {
      id: 5,
      name: 'Chocolate Blanco Cremoso',
      image: '/assets/images/chocolate5-min.jpg',
      price: 9800,
      currency: 'USD',
      category: 'Blanco',
      shortDescription: 'Suave chocolate blanco con textura ultra cremosa.',
    },
    {
      id: 6,
      name: 'Chocolate con Naranja',
      image: '/assets/images/chocolate6-min.jpg',
      price: 10500,
      currency: 'USD',
      category: 'Con frutas',
      shortDescription: 'Chocolate oscuro con un toque cítrico de naranja.',
    },
    {
      id: 7,
      name: 'Brownies de Chocolate',
      image: '/assets/images/chocolate7-min.jpg',
      price: 16200,
      currency: 'USD',
      category: 'Repostería',
      shortDescription: 'Brownies suaves y esponjosos con intenso cacao.',
    },
    {
      id: 8,
      name: 'Chocolate con Menta',
      image: '/assets/images/chocolate8-min.jpg',
      price: 9900,
      currency: 'USD',
      category: 'Con sabores',
      shortDescription: 'Frescura de menta en cada bocado de chocolate.',
    },
    {
      id: 9,
      name: 'Barra con Avellanas',
      image: '/assets/images/chocolate9-min.jpg',
      price: 8800,
      currency: 'USD',
      category: 'Con frutos secos',
      shortDescription: 'Barra de chocolate con trozos de avellana tostada.',
    },
    {
      id: 10,
      name: 'Chocolate Artesanal Mexicano',
      image: '/assets/images/chocolate10-min.jpg',
      price: 11400,
      currency: 'USD',
      category: 'Artesanal',
      shortDescription: 'Hecho a mano con tradición y cacao mexicano puro.',
    }
  ];

}
