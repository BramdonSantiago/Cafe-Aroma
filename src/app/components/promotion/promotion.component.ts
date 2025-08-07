import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-promotion',
  imports: [],
  templateUrl: './promotion.component.html',
  styleUrl: './promotion.component.scss'
})
export class PromotionComponent {
  @Input() promotion!: any;
  @Input() promotionFeatured!: string;
}
