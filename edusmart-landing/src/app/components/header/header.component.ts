import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // <--- Importante

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule], // <--- Lo agregamos aquí
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent { }