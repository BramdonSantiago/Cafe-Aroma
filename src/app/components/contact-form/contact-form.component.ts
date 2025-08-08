import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, ValidationErrors, FormControl, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm = new FormGroup({
    nameInput: new FormControl('', [Validators.required, Validators.minLength(10)]),
    mailInput: new FormControl('', [Validators.required, Validators.minLength(10)]),
    messageInput: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  getInvalidControls() {
    return Object.values(this.contactForm.controls).forEach(control => {
      control.markAllAsTouched();
    })
  }

  onSubmit() {
    if (!this.contactForm.valid) {
      this.getInvalidControls();
    } else {
      console.log("Enviar");
    }
  }
}
