import { Component } from '@angular/core';
import { UserNavbarComponent } from '../../../composents/user-navbar/user-navbar.component';
import { UserComponent } from '../../../composents/user/user.component';

@Component({
  selector: 'app-administrateur',
  imports: [UserNavbarComponent, UserComponent],
  templateUrl: './administrateur.component.html',
  styleUrl: './administrateur.component.scss'
})
export class AdministrateurComponent {

}
