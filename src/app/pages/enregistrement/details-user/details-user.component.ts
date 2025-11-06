import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Rating } from 'primeng/rating';

@Component({
  selector: 'app-details-user',
  imports: [Rating, FormsModule],
  templateUrl: './details-user.component.html',
  styleUrl: './details-user.component.scss'
})
export class DetailsUserComponent {
  note : Number = 3
}
