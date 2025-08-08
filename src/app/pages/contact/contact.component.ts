import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ContactFormComponent, CommonModule, RouterModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
