import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { PropertyComponent } from './properties/properties';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'properties', component: PropertyComponent },
];