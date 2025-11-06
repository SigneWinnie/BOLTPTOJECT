import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  RouterLink, RatingModule, FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private router: Router) {}

  title = 'TutoreFront';
  visible: boolean = true 
   menuItems : any[]=[
    {
      route : "/dashboard",
      label : "Dashboard",
      icon : "fas far fa-chart-bar",
    },
    {
      route : "/liste-demande",
      label : "Demandes",
      icon : "fas fa-file-invoice",
    },
    {
      route : "/configuration",
      label : "Configuration",
      icon : "fas fa-gears",
    },
    {
      route : "/settings",
      label : "Paramètres",
      icon : "fab fa-whmcs",
    }
  ]


   isActiveRoute(route: string): boolean {
    const currentUrl = this.router.url;

    if (route === '/liste-demande' && currentUrl.startsWith('/detail-demande')) {
      return true; // Considère /detail-demande comme faisant partie de /liste-demande
    } else {
      return currentUrl.startsWith(route);
    }
}
}
