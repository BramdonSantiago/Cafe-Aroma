import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-share',
  imports: [],
  templateUrl: './btn-share.component.html',
  styleUrl: './btn-share.component.scss'
})
export class BtnShareComponent {
  share() {
    if (navigator.share) {
      navigator.share({
        url: window.location.href
      })
      .then(() => console.log('Compartido exitosamente'))
      .catch((error) => console.error('Error al compartir:', error));
    } else {
      alert('La función de compartir no es compatible con este navegador.');
    }
  }
}
