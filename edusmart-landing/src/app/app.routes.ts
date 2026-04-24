import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { CoursesComponent } from './components/courses/courses.component';

export const routes: Routes = [
  { path: '', component: HeroComponent }, 
  { path: 'explorar', component: CoursesComponent },
  { path: '**', redirectTo: '' } 
];