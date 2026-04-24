import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importante para el ngFor

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  // Requisito: Uso de data para ngFor
  public planes = [
    { titulo: 'Plan Funcional', precio: 50, desc: 'Entrenamiento de alta intensidad.', img: '💪' },
    { titulo: 'Plan Yoga', precio: 40, desc: 'Flexibilidad y control mental.', img: '🧘' },
    { titulo: 'Plan Pesas', precio: 60, desc: 'Aumento de masa muscular.', img: '🏋️' }
  ];
}