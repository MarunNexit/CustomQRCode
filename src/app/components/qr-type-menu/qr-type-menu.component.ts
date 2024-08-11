import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QrCodeType} from "../../models/qr-code-types.enum";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroLink, heroDocumentText, heroEnvelope, heroWifi, heroPhoto } from '@ng-icons/heroicons/outline';
import {NgClass} from "@angular/common";
import {ThemeService} from "../../services/theme.service";
@Component({
  selector: 'app-qr-type-menu',
  standalone: true,
  imports: [NgIconComponent, NgClass],
  templateUrl: './qr-type-menu.component.html',
  styleUrl: './qr-type-menu.component.css',
  providers: [provideIcons({ heroLink, heroDocumentText, heroEnvelope, heroWifi, heroPhoto })]
})
export class QrTypeMenuComponent implements OnInit{
  @Output() selectionChangeQrCodeType = new EventEmitter<QrCodeType>()
  currentSelection: QrCodeType = QrCodeType.URL;
  public isDarkMode: boolean = false;

  constructor(private themeService: ThemeService) {}
  ngOnInit(){
    this.selectionChangeQrCodeType.emit(QrCodeType.URL);
    this.isDarkMode = this.themeService.getCurrentTheme() === 'dark';
    this.themeService.onThemeChange().subscribe(theme => {
      this.isDarkMode = theme === 'dark';
    });
  }


  selectOption(option: QrCodeType) {
    this.currentSelection = option;
    this.selectionChangeQrCodeType.emit(option);
  }

  protected readonly QrCodeType = QrCodeType;
}
