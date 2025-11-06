import { Routes } from '@angular/router';

export const routes: Routes = [
    {
    path: '',
    redirectTo: 'list/Administrateur  ',
    pathMatch: 'full',
  },
  // Ici les routes des enregistrement et permet de gerer les utilisateur avec leurs role
  {
    path: 'list/Administrateur',
    title: 'Liste Administrateur',
    loadComponent: () => import('./pages/enregistrement/administrateur/administrateur.component').then(m => m.AdministrateurComponent),      
  },
    {
    path: 'list/Agent', 
    title: 'Liste Agent',
    loadComponent: () => import('./pages/enregistrement/agent/agent.component').then(m => m.AgentComponent),      
  },
    {
    path: 'list/Superviseur',
    title: 'Liste Superviseur',
    loadComponent: () => import('./pages/enregistrement/superviseur/superviseur.component').then(m => m.SuperviseurComponent),      
  },
  {
    path: 'DetailsUser',
    title: 'Details Utilisateur',
    loadComponent: () => import('./pages/enregistrement/details-user/details-user.component').then(m => m.DetailsUserComponent),      
  },
   

  // Ici les routes des enregistrement et permet de gerer les Batiments
{
    path: 'DetailsBatiment',
    title: 'Details Batiment',
    loadComponent: () => import('./pages/configuration/details-batiment/details-batiment.component').then(m => m.DetailsBatimentComponent),      
  },
];
