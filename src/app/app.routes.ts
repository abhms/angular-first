import { Routes } from '@angular/router';
import { AboutComponent } from './about/about';
import { HomeComponent } from './home/home';
import { ContactComponent } from './contact/contact';
import {GetapiComponent} from './getapi/getapi.component';
import {PostapiComponent} from './postapi/postapi.component';
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
  {
    path: 'get-api',
    component: GetapiComponent,
  },
  {
    path: 'post-api',
    component: PostapiComponent,
  },
];
