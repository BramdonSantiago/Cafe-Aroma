import { Component } from '@angular/core';
import { PromotionComponent } from '../../components/promotion/promotion.component';

@Component({
  selector: 'app-promotions',
  imports: [PromotionComponent],
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.scss'
})
export class PromotionsComponent {
  promotions = [
    {
      id: 1,
      image: '/assets/images/promocion1.jpg',
      title: '2x1 en Cafés Fríos',
      descripcion: 'Disfruta de un delicioso café frío y llévate otro completamente gratis. Solo por hoy.'
    },
    {
      id: 2,
      image: '/assets/images/promocion2.jpg',
      title: 'Postres al 50%',
      descripcion: 'Mitad de precio en todos nuestros postres artesanales. Solo en compras mayores a $100.'
    },
    {
      id: 3,
      image: '/assets/images/promocion3.jpg',
      title: 'Café + Panecillo',
      descripcion: 'Combo especial de café con panecillo recién horneado por solo $49 MXN.'
    },
    {
      id: 4,
      image: '/assets/images/promocion4.jpg',
      title: 'Descuento por Reutilizar',
      descripcion: 'Trae tu propio vaso y obtén un 15% de descuento en cualquier bebida.'
    },
    {
      id: 5,
      image: '/assets/images/promocion5.jpg',
      title: 'Happy Hour',
      descripcion: 'De 5 a 7 PM, todas las bebidas al 2x1. Ideal para cerrar el día.'
    },
    {
      id: 6,
      image: '/assets/images/promocion6.jpg',
      title: 'Nueva Línea Orgánica',
      descripcion: 'Prueba nuestras nuevas bebidas orgánicas hechas con ingredientes 100% naturales.'
    },
    {
      id: 7,
      image: '/assets/images/promocion7.jpg',
      title: 'Regalo por Check-in',
      descripcion: 'Haz check-in en nuestras redes sociales y llévate una galleta gratis.'
    },
    {
      id: 8,
      image: '/assets/images/promocion8.jpg',
      title: 'Especial Estudiantil',
      descripcion: 'Presenta tu credencial de estudiante y recibe un 20% de descuento.'
    },
    {
      id: 9,
      image: '/assets/images/promocion9.jpg',
      title: 'Domingos Dulces',
      descripcion: 'Todos los domingos los frappés tienen un 30% de descuento.'
    },
    {
      id: 10,
      image: '/assets/images/promocion10.jpg',
      title: 'Bebida de Temporada',
      descripcion: 'Descubre nuestro nuevo Latte de Calabaza, disponible por tiempo limitado.'
    }
  ];
}
