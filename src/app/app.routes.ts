import { Routes } from '@angular/router';
import {QRCodeComponent} from "angularx-qrcode";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'qr-code/link', // Використовуйте значення за замовчуванням
    pathMatch: 'full'
  },
  {
    path: 'qr-code/:type',
    component: QRCodeComponent
  },
];
