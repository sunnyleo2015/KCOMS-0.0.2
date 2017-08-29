import {Route, RouterModule} from '@angular/router';
import {MainComponent} from './main.component';
import {MonitorComponent} from './monitor/monitor.component';
import {DetailComponent} from './detail/detail.component';
import {SettingComponent} from './setting/setting.component';
import {ChartComponent} from './chart/chart.component';

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
      },
      {
        path: 'setting',
        component: SettingComponent
      },
      {
        path: 'echarts',
        component: ChartComponent
      },
    ],
  }
];

export const routing = RouterModule.forChild(ROUTER_CONFIG);
