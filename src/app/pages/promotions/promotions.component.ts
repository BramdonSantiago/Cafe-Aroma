import { Component } from '@angular/core';
import { PromotionComponent } from '@components/promotion/promotion.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-promotions',
  imports: [PromotionComponent, CommonModule, RouterModule],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent {
  promotions = [
    {
      id: 1,
      image: '/assets/images/cafe-1.jpeg',
      title: '2x1 en Cafés Fríos',
      shortDescription: 'Disfruta de un delicioso café frío y llévate otro completamente gratis. Solo por hoy.'
    },
    {
      id: 2,
      image: '/assets/images/cafe-2.jpeg',
      title: 'Postres al 50%',
      shortDescription: 'Mitad de precio en todos nuestros postres artesanales. Solo en compras mayores a $100.'
    },
    {
      id: 3,
      image: '/assets/images/cafe-3.jpeg',
      title: 'Café + Panecillo',
      shortDescription: 'Combo especial de café con panecillo recién horneado por solo $49 MXN.'
    },
    {
      id: 4,
      image: '/assets/images/cafe-4.jpeg',
      title: 'Descuento por Reutilizar',
      shortDescription: 'Trae tu propio vaso y obtén un 15% de descuento en cualquier bebida.'
    },
    {
      id: 5,
      image: '/assets/images/cafe-5.jpeg',
      title: 'Happy Hour',
      shortDescription: 'De 5 a 7 PM, todas las bebidas al 2x1. Ideal para cerrar el día.'
    },
    {
      id: 6,
      image: '/assets/images/chocolate1-min.jpg',
      title: 'Nueva Línea Orgánica',
      shortDescription: 'Prueba nuestras nuevas bebidas orgánicas hechas con ingredientes 100% naturales.'
    },
    {
      id: 7,
      image: '/assets/images/chocolate2-min.jpg',
      title: 'Regalo por Check-in',
      shortDescription: 'Haz check-in en nuestras redes sociales y llévate una galleta gratis.'
    },
    {
      id: 8,
      image: '/assets/images/chocolate3-min.jpg',
      title: 'Especial Estudiantil',
      shortDescription: 'Presenta tu credencial de estudiante y recibe un 20% de descuento.'
    },
    {
      id: 9,
      image: '/assets/images/chocolate4-min.jpg',
      title: 'Domingos Dulces',
      shortDescription: 'Todos los domingos los frappés tienen un 30% de descuento.'
    },
  ];
}
