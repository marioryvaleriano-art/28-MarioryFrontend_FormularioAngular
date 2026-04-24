import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Importamos los componentes que se muestran en el inicio
import { BenefitsComponent } from '../benefits/benefits.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    BenefitsComponent, 
    ContactComponent
  ],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  // Ponemos la lista de juegos AQUÍ ADENTRO, una sola vez.
  juegos = [
    { 
      title: 'RESIDENT EVIL 2', 
      img: 'https://i.pinimg.com/1200x/a1/c7/78/a1c778b6bc9e166d1f69a4860cc5fb14.jpg', 
      tag: 'DESTACADO', 
      clase: 'destacado' 
    },
    { 
      title: 'RESIDENT EVIL 4 REMAKE', 
      img: 'https://i.pinimg.com/1200x/7f/2d/fe/7f2dfedbda068ac695707a449e85ec10.jpg', 
      tag: 'NUEVO', 
      clase: 'nuevo' 
    },
    { 
      title: 'ALICE MADNESS', 
      img: 'https://i.pinimg.com/736x/95/00/06/950006903879a47717dce9a4a77c0878.jpg', 
      tag: 'RECOMENDADO', 
      clase: 'recomendado' 
    },
    { 
      title: 'SILENT HILL', 
      img: 'https://i.pinimg.com/1200x/2d/6b/a5/2d6ba563237f80452d8add0f69b0ad61.jpg', 
      tag: 'CLÁSICO', 
      clase: 'clasico' 
    }
  ];
}