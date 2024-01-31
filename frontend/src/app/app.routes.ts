import {Routes} from '@angular/router';


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/social-media/social-media.component').then((m) => m.SocialMediaComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./layout/error/error.component').then((m) => m.ErrorComponent),
  }
];
