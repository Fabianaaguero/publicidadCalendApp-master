import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactoForm: FormGroup;
  mensajeEnviado: boolean = false;

  constructor(private fb: FormBuilder) {
    this.contactoForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  submitForm(): void {
    if (this.contactoForm.valid) {
      const formData = this.contactoForm.value;
      setTimeout(() => {
        this.mensajeEnviado = true;
        this.contactoForm.reset();
        setTimeout(() => {
          this.mensajeEnviado = false;
        }, 3000); 
      }, 500);
    } else {
      Object.values(this.contactoForm.controls).forEach(control => {
        control.markAsTouched();
      });
    }
  }
}