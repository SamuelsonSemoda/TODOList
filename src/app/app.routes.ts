import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },

  {
    path: 'todo',
    loadComponent: () => import('./todo/todo.page').then( m => m.TodoPage)
  },

  {
    path: '',
    redirectTo: 'todo',
    pathMatch: 'full',
  },
];
