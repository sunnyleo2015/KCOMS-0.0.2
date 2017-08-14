import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { routing } from './main.route';
import { MonitorComponent } from './monitor/monitor.component';
import { RebirthNGModule } from 'rebirth-ng';
import { DetailComponent } from './detail/detail.component';


@NgModule({
  imports: [
    CommonModule,
    routing,
    RebirthNGModule,
  ],
  exports: [
    MonitorComponent
  ],
  providers: [
  ],
  declarations: [
    MainComponent,
    MonitorComponent,
    DetailComponent
  ],
  entryComponents: [
    MainComponent
  ]
})
export class MainModule { }
