import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { LOCALE_ID } from '@angular/core';

registerLocaleData(localeEs);

@Component({
  selector: 'app-entry-blog',
  imports: [CommonModule],
  providers: [{ provide: LOCALE_ID, useValue: 'es' }],
  templateUrl: './entry-blog.component.html',
  styleUrl: './entry-blog.component.scss'
})
export class EntryBlogComponent {
  @Input() blog!: any;
}
