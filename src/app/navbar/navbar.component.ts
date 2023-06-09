import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  logo = 'https://indihire.com/wp-content/uploads/2022/03/logo.png'
  isMenuOpen: boolean = false;
  navbar: any = {
    first: 'What we do',
    second: 'Expertise',
    third: 'Find jobs',
    fourth: 'About us',
    fifth: 'Resources',
    sixth: 'Contact us'
  };

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
  
  closeMenu(): void {
    if (this.isMenuOpen) {
      this.toggleMenu();
    }
  }
}
