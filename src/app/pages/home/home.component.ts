import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Pagination, Autoplay } from 'swiper/modules';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  testimonials = [
    {
      id: 1,
      image: '/assets/images/testimonial-1.jpg',
      name: 'Bramdon Santiago',
      typeTestimonial: 'Cliente frecuente',
      say: '¡El mejor café que he probado! Siempre llega calientito y con ese aroma que alegra el día.',
    },
    {
      id: 2,
      image: '/assets/images/testimonial-2.jpeg',
      name: 'Paul McCartney',
      typeTestimonial: 'Comprador online',
      say: 'El servicio es excelente. Pedí un paquete de granos y llegó en menos de 24 horas.',
    },
    {
      id: 3,
      image: '/assets/images/testimonial-3.jpeg',
      name: 'Beto Cuevas',
      typeTestimonial: 'Fan del café orgánico',
      say: 'Me encanta que sus productos sean sustentables y de comercio justo. ¡Saben increíble!',
    }
  ];


  swiperTestimonials!: Swiper;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeSwiper();
    }
  }

  initializeSwiper() {
    this.swiperTestimonials = new Swiper('.swiper-testimonials', {
      modules: [Pagination, Autoplay],
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
      },
    });
  }
}
