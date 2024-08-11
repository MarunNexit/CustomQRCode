import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {QrCodeComponent} from "./components/qr-code/qr-code.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ThemeService} from "./services/theme.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QrCodeComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ThemeService]
})
export class AppComponent {
  title = 'QRCodeGenerator';
}
