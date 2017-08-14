import {Route, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {MonitorComponent} from './monitor/monitor.component';
import {DetailComponent} from './detail/detail.component';

const ROUTER_CONFIG: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'monitor',
        component: MonitorComponent
      },
      {
        path: 'detail',
        component: DetailComponent
      }
    ],
  }
];

export const routing = RouterModule.forChild(ROUTER_CONFIG);
