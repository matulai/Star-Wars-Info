import { Home, Films, Category, NotFound, CategoryElement } from '@app/features'
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'films',
    component: Films,
  },
  {
    path: 'people',
    component: Category,
    data: { title: 'people' }
  },
  {
    path: 'planets',
    component: Category,
    data: { title: 'planets' }
  },
    {
    path: 'species',
    component: Category,
    data: { title: 'species' }
  },
  {
    path: 'vehicles',
    component: Category,
    data: { title: 'vehicles' }
  },
  {
    path: 'starships',
    component: Category,
    data: { title: 'starships' }
  },
  {
    path: 'films/:id',
    component: CategoryElement,
    data: { title: 'films' }
  },
  {
    path: 'people/:id',
    component: CategoryElement,
    data: { title: 'people' }
  },
  {
    path: 'planets/:id',
    component: CategoryElement,
    data: { title: 'planets' }
  },
    {
    path: 'species/:id',
    component: CategoryElement,
    data: { title: 'species' }
  },
  {
    path: 'vehicles/:id',
    component: CategoryElement,
    data: { title: 'vehicles' }
  },
  {
    path: 'starships/:id',
    component: CategoryElement,
    data: { title: 'starships' }
  },
  {
    path: '**',
    component: NotFound,
  }
];
