import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JuegoService } from '../services/juego.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  listaJuegos: any[] = [];

  juegoActual: any = {
    titulo: '',
    categoria: '',
    imagen: '',
    descripcion: ''
  };

  constructor(private juegoService: JuegoService) {}

  guardar(form: any): void {

    if (!this.juegoActual.titulo || !this.juegoActual.categoria) {
      alert("Completa los campos obligatorios");
      return;
    }

    console.log("📤 ENVIANDO:", this.juegoActual);

    this.juegoService.guardar(this.juegoActual).subscribe({
      next: (data) => {

        console.log("✅ GUARDADO:", data);

        this.listaJuegos.push(data);

        alert("Juego guardado");

        this.limpiar(form);
      },
      error: (err) => {
        console.log("❌ ERROR:", err);
        alert("Error al guardar");
      }
    });

  }

  limpiar(form: any) {
    this.juegoActual = {
      titulo: '',
      categoria: '',
      imagen: '',
      descripcion: ''
    };

    form.resetForm();
  }

  prepararEdicion(j: any) {
    this.juegoActual = { ...j };
  }

  eliminar(id: number) {
    this.listaJuegos = this.listaJuegos.filter(j => j.id !== id);
  }
}