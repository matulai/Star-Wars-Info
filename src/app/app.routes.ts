import { Home, Films, Category, NotFound } from '@app/features'
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
    path: '**',
    component: NotFound,
  }
];
