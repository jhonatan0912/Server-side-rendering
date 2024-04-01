import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/todos/todos.component').then(p => p.TodosComponent)
  },
  {
    path: 'todo/:id',
    loadComponent: () => import('./pages/todo/todo.component').then(p => p.TodoComponent)
  }, {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
