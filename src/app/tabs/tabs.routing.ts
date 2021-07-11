import { Routes } from '@angular/router';
import { TabsComponent } from './views/tabs/tabs.component';

export const tabsRoutes: Routes = [
  {
    path: '',
    component: TabsComponent,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomeModule)
          }
        ]
      },
      {
        path: 'feed',
        children: [
          {
            path: '',
            loadChildren: () => import('../feed/feed.module').then(m => m.FeedModule)
          }
        ]
      },
      {
        path: 'program',
        children: [
          {
            path: '',
            loadChildren: () => import('../program/program.module').then(m => m.ProgramModule)
          }
        ]
      },
      {
        path: 'gallery',
        children: [
          {
            path: '',
            loadChildren: () => import('../gallery/gallery.module').then(m => m.GalleryModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
  }
];
