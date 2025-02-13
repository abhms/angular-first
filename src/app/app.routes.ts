import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { HomeComponent } from './home/home';
import { ContactComponent } from './contact/contact';
export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
