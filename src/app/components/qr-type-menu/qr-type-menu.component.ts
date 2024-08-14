import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QrCodeType} from "../../models/qr-code-types.enum";
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { heroLink, heroDocumentText, heroEnvelope, heroWifi, heroPhoto } from '@ng-icons/heroicons/outline';
import {NgClass} from "@angular/common";
import {ThemeService} from "../../services/theme.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NavigationRouterService} from "../../services/navigation-router.service"

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


  constructor(private themeService: ThemeService, private route: ActivatedRoute, private router: Router, private navigationRouterService: NavigationRouterService) {}
  ngOnInit(){
    this.selectionChangeQrCodeType.emit(QrCodeType.URL);
    this.isDarkMode = this.themeService.getCurrentTheme() === 'dark';
    this.themeService.onThemeChange().subscribe(theme => {
      this.isDarkMode = theme === 'dark';
    });
    this.changeRoutes();
  }

  changeRoutes(): void {
    this.router.events.subscribe(() => {
      const currentUrl = this.router.url.split('/');
      const lastSegment = currentUrl[currentUrl.length - 1];
      this.currentSelection = this.mapTypeToEnum(lastSegment);
      this.selectionChangeQrCodeType.emit(this.currentSelection);
    });
  }

  mapTypeToEnum(type: string | null): QrCodeType {
    switch (type) {
      case 'link':
        return QrCodeType.URL;
      case 'text':
        return QrCodeType.TEXT;
      case 'file':
        return QrCodeType.FILE;
      case 'e-mail':
        return QrCodeType.EMAIL;
      case 'wi-fi':
        return QrCodeType.WIFI;
      default:
        return QrCodeType.URL;
    }
  }


  selectOption(option: QrCodeType) {
    let link = `/qr-code/${option.toLowerCase()}`;
    this.navigationRouterService.navigateToLink(link);
  }

  protected readonly QrCodeType = QrCodeType;
}
