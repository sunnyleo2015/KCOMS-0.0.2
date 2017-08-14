/**
 * Created by Administrator on 2017/8/14.
 */
import { Route, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';

const ROUTER_CONFIG: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    component: AppComponent,
  },
  {
    path: 'main',
    loadChildren: './main/main.module#MainModule',
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(ROUTER_CONFIG);
