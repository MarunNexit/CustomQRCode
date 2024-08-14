import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationRouterService {

  constructor(private router: Router) {
    console.log('I AM')
  }

  navigateToLink(link: string): void {
    this.router.navigate([link]);
  }
}
