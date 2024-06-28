import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [CarouselModule, CommonModule],
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.css'
})
export class InformacionComponent {
  testimonials = [
    { text: 'La aplicación ha transformado la manera en que gestiono mi consultorio. Ahora puedo concentrarme más en la atención de mis pacientes.', author: 'Dra. Ana López, médica psiquiatra' },
    { text: 'Gracias a esta app, puedo gestionar mis citas de manera eficiente.', author: 'Dr. Julio Fernández, médico clínico' },
    { text: '¡Excelente herramienta para médicos! Simplifica mi día a día.', author: 'Dra. Laura Rodríguez, médica pediatra' }
  ];
  
  currentTestimonial = 0;
  testimonialInterval: any;

  ngOnInit() {
    this.testimonialInterval = setInterval(() => {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
    }, 3000);
  }

  ngOnDestroy() {
    if (this.testimonialInterval) {
      clearInterval(this.testimonialInterval);
    }
  }
}
