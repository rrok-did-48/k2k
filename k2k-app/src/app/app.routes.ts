import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'K2K SRL – Carrozzeria a Gambettola e Borello'
  },
  {
    path: 'chi-siamo',
    loadComponent: () => import('./pages/chi-siamo/chi-siamo.component').then(m => m.ChiSiamoComponent),
    title: 'Chi Siamo – K2K SRL'
  },
  {
    path: 'servizi',
    loadComponent: () => import('./pages/servizi/servizi.component').then(m => m.ServiziComponent),
    title: 'Servizi – K2K SRL'
  },
  {
    path: 'assicurazioni',
    loadComponent: () => import('./pages/assicurazioni/assicurazioni.component').then(m => m.AssicurazioniComponent),
    title: 'Gestione Sinistri – K2K SRL'
  },
  {
    path: 'cristalli',
    loadComponent: () => import('./pages/cristalli/cristalli.component').then(m => m.CristalliComponent),
    title: 'Centro Glassdrive Cristalli – K2K SRL'
  },
  {
    path: 'aziende',
    loadComponent: () => import('./pages/aziende/aziende.component').then(m => m.AziendeComponent),
    title: 'Aziende e Flotte – K2K SRL'
  },
  {
    path: 'contatti',
    loadComponent: () => import('./pages/contatti/contatti.component').then(m => m.ContattiComponent),
    title: 'Contatti e Appuntamento – K2K SRL'
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
