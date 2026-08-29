import { Routes } from '@angular/router';
import { Layout } from './core/layout/layout/layout';
import { HomeComponent } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { 
        path: 'home', 
        component: HomeComponent, 
        title: 'Stotra — Hindu Prayers & Recitations' 
      },
      
      { 
        path: 'chalisa', 
        loadComponent: () => import('./features/chalisa/chalisa').then(m => m.ChalisaComponent),
        title: 'Stotra — Chalisa' 
      },
      { 
        path: 'mantra', 
        loadComponent: () => import('./features/mantra/mantra').then(m => m.MantraComponent),
        title: 'Stotra — Mantra' 
      },
      { 
        path: 'aarti', 
        loadComponent: () => import('./features/aarti/aarti').then(m => m.AartiComponent),
        title: 'Stotra — Aarti' 
      },
      { 
        path: 'stotra', 
        loadComponent: () => import('./features/stotra/stotra').then(m => m.StotraComponent),
        title: 'Stotra — Stotra' 
      },
      { 
        path: 'festivals', 
        loadComponent: () => import('./features/festivals/festivals').then(m => m.FestivalsComponent),
        title: 'Stotra — Festivals' 
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];