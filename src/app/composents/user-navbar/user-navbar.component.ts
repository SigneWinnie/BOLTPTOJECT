import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-navbar',
  imports: [NgClass],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.scss'
})
export class UserNavbarComponent {

  @Input() Roletile!: string; 


  // Méthode pour vérifier si un bouton est actif
  isActiveLink(button: string): boolean {
    return this.Roletile === button;
  }
}
