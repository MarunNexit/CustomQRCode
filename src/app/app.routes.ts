import { Routes } from '@angular/router';
import {InfoPageComponent} from "./components/info-page/info-page.component";
import {AboutPageComponent} from "./components/about-page/about-page.component";
import {QrCodeComponent} from "./components/qr-code/qr-code.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'qr-code/link', // Використовуйте значення за замовчуванням
    pathMatch: 'full',
  },
  {
    path: 'qr-code/:type',
    component: QrCodeComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'info',
    component: InfoPageComponent
  },
  {
    path: '**',
    redirectTo: 'qr-code/link' // Обробка невизначених маршрутів
  }
];
