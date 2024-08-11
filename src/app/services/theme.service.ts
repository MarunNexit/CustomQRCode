import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private readonly themeKey = 'theme';
  private readonly darkClass = 'dark';
  private themeSubject: BehaviorSubject<string>;

  constructor() {
    const initialTheme = localStorage.getItem(this.themeKey) || 'light';
    this.themeSubject = new BehaviorSubject<string>(initialTheme);
    this.initializeTheme();
  }

  private initializeTheme(): void {
    const currentTheme = this.themeSubject.getValue();
    if (currentTheme === 'dark') {
      document.documentElement.classList.add(this.darkClass);
    } else {
      document.documentElement.classList.remove(this.darkClass);
    }
  }

  public toggleTheme(): void {
    const newTheme = this.themeSubject.getValue() === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle(this.darkClass);
    localStorage.setItem(this.themeKey, newTheme);
    this.themeSubject.next(newTheme); // Notify subscribers of the change
  }

  public getCurrentTheme(): string {
    return this.themeSubject.getValue();
  }

  public onThemeChange() {
    return this.themeSubject.asObservable(); // Expose the Observable for subscription
  }
}
