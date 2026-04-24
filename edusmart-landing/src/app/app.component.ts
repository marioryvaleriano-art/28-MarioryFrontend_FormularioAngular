import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // <--- Importante
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent], // <--- Verifica esto
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { }