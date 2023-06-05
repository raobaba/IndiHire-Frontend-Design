import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
    navbar:any= {first:'What we do',second:'Expertise',third:'Find jobs',fourth:'About us',fifth:'Resources',sixth:'Contact us'};
}
