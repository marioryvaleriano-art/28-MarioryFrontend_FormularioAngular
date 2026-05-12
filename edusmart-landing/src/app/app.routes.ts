import { Routes } from '@angular/router';

import { HeroComponent } from './components/hero/hero.component';
import { CoursesComponent } from './components/courses/courses.component';
import { AdminComponent } from './components/admin/admin.component';

export const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'explorar', component: CoursesComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' }
];