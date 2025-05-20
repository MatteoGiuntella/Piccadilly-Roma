import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./main/home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./main/free/menu/menu.component').then((c) => c.MenuComponent),
  },
  {
    path: 'reservations',
    loadComponent: () =>
      import('./main/free/reservations/reservations.component').then(
        (c) => c.ReservationsComponent
      ),
  },
  {
    path: 'event',
    loadComponent: () =>
      import('./main/free/event/event.component').then((c) => c.EventComponent),
  },
  {
    path: 'wine',
    loadComponent: () =>
      import('./main/free/wine/wine.component').then((c) => c.WineComponent),
  },
  {
    path: 'cocktail',
    loadComponent: () =>
      import('./main/free/cocktail/cocktail.component').then(
        (c) => c.CocktailComponent
      ),
  },
  {
    path: 'appetizers',
    loadComponent: () =>
      import('./main/free/appetizers/appetizers.component').then(
        (c) => c.AppetizersComponent
      ),
  }, {
    path: 'login',
    loadComponent: () =>
      import('./main/admin/login/login.component').then(
        (c) => c.LoginComponent
      ),
  },
];
