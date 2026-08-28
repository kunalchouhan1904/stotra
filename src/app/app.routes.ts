import { Routes } from '@angular/router';

import { Layout } from './core/layout/layout/layout';

import { Dashboard } from './features/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      { path: 'dashboard', component: Dashboard },

    ]
  },

  { path: '**', redirectTo: 'dashboard' }
];