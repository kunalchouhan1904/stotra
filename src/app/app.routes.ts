import { Routes } from '@angular/router';

import { Layout } from './core/layout/layout/layout';

import { HomeComponent } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: 'home', component: HomeComponent, title: 'Home' },

    ]
  },

  { path: '**', redirectTo: 'home' }
];