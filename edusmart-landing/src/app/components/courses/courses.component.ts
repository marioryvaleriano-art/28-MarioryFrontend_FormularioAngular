import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Juego {
  title: string;
  img: string;
  label?: string;
  descripcion?: string;
}

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule], // Aquí NO va RouterModule si no lo usas
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  searchText: string = '';
  mostrarDetalle: boolean = false;
  juegoSeleccionado: Juego | null = null;

  tendencias: Juego[] = [
    { title: 'Resident Evil 2', img: 'images/resident evil2.jpg', label: 'DESTACADO', descripcion: 'Leon S. Kennedy y Claire Redfield deben escapar de Raccoon City en esta obra maestra del terror.' },
    { title: 'Resident Evil 4 Remake', img: 'images/resident evil4.jpg', label: 'NUEVO' },
    { title: 'Alice Madness', img: 'images/alice.jpg', label: 'RECOMENDADO' },
    { title: 'Silent Hill', img: 'images/silent hill.jpg', label: 'CLÁSICO' }
  ];

  clasicos: Juego[] = [
    { title: 'Silent Hill 2 Remake', img: 'images/silent hill2.jpg' },
    { title: 'Juego Japonés', img: 'images/juego japones.jpg' },
    { title: 'Five Nights at Freddy\'s', img: 'images/fredy.jpg' },
    { title: 'Silent Hill HD', img: 'images/silenthhill.jpg' }
  ];

  residentEvilSaga: Juego[] = [
    { title: 'Resident Evil 6', img: 'images/resident evil6.jpg' },
    { title: 'Residen Evil 9', img: 'images/residen evil9.jpg' },
    { title: 'Juego 3', img: 'images/juego 3.jpg' },
    { title: 'Juego Japonés 2', img: 'images/juego japones2.jpg' }
  ];

  verDetalle(juego: Juego) {
    if (juego.title === 'Resident Evil 2') {
      this.juegoSeleccionado = juego;
      this.mostrarDetalle = true;
      window.scrollTo(0, 0);
    }
  }

  cerrarDetalle() {
    this.mostrarDetalle = false;
    this.juegoSeleccionado = null;
  }
}