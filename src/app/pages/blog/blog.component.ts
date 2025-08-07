import { Component } from '@angular/core';
import { EntryBlogComponent } from '../../components/entry-blog/entry-blog.component';

@Component({
  selector: 'app-blog',
  imports: [EntryBlogComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  blogs = [
    {
      id: 1,
      image: '/assets/images/chocolate1-min.jpg',
      title: 'Beneficios del Café en tu Día a Día',
      date: '2025-07-25',
      descriptionShort: 'Descubre cómo una taza de café puede mejorar tu productividad y estado de ánimo.',
    },
    {
      id: 2,
      image: '/assets/images/chocolate2-min.jpg',
      title: 'Cómo Preparar un Espresso Perfecto',
      date: '2025-07-20',
      descriptionShort: 'Guía paso a paso para lograr un espresso con sabor intenso y cremoso.',
    },
    {
      id: 3,
      image: '/assets/images/chocolate3-min.jpg',
      title: 'Café de Especialidad: ¿Qué lo Hace Único?',
      date: '2025-07-15',
      descriptionShort: 'Explora las características que diferencian al café de especialidad del convencional.',
    },
    {
      id: 4,
      image: '/assets/images/chocolate4-min.jpg',
      title: 'Los Mejores Métodos de Filtrado Casero',
      date: '2025-07-10',
      descriptionShort: 'Comparativa entre V60, Chemex y prensa francesa para preparar café en casa.',
    },
    {
      id: 5,
      image: '/assets/images/chocolate5-min.jpg',
      title: '¿Molido Fino o Grueso? Guía de Molido de Café',
      date: '2025-07-05',
      descriptionShort: 'Aprende cómo el grosor del molido afecta el sabor de tu bebida.',
    },
    {
      id: 6,
      image: '/assets/images/chocolate6-min.jpg',
      title: 'El Origen del Café: Un Viaje por Etiopía',
      date: '2025-07-01',
      descriptionShort: 'Conoce la historia y cultura detrás del país donde nació el café.',
    },
    {
      id: 7,
      image: '/assets/images/chocolate7-min.jpg',
      title: 'Cómo Conservar tu Café por Más Tiempo',
      date: '2025-06-27',
      descriptionShort: 'Consejos prácticos para mantener la frescura y el aroma del café molido o en grano.',
    },
    {
      id: 8,
      image: '/assets/images/chocolate8-min.jpg',
      title: 'Café y Salud: Lo que Dice la Ciencia',
      date: '2025-06-20',
      descriptionShort: 'Estudios recientes sobre los efectos positivos del café en la salud.',
    },
    {
      id: 9,
      image: '/assets/images/chocolate9-min.jpg',
      title: 'Tendencias en el Mundo del Café 2025',
      date: '2025-06-15',
      descriptionShort: 'Desde cafés fríos hasta mezclas con adaptógenos: lo que viene en este año.',
    },
    ];
}
