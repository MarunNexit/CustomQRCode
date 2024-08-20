import {Component, HostListener} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {NgClass, NgTemplateOutlet} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    NgTemplateOutlet,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  public isDarkMode: boolean;
  isMenuOpen = false;
  isMobileView = false;

  constructor(private themeService: ThemeService) {
    this.isDarkMode = this.themeService.getCurrentTheme() === 'dark';
    this.checkScreenSize();
  }

  @HostListener('window:resize', [])
  onResize() {
    console.log('resize')
    this.checkScreenSize();
  }

  private checkScreenSize() {
    this.isMobileView = window.innerWidth < 768;
    if (!this.isMobileView) {
      this.isMenuOpen = false;
    }
  }
  ngOnInit(): void {}

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.isDarkMode = !this.isDarkMode;
  }
}
