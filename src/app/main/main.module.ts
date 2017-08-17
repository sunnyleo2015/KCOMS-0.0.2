import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { routing } from './main.route';
import { MonitorComponent } from './monitor/monitor.component';
import { DetailComponent } from './detail/detail.component';
import { SettingComponent } from './setting/setting.component';
import { SideSettingComponent } from './side-setting/side-setting.component';
import { OutsideDirective } from '../directive/outside.directive';
import {NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { StationsTableComponent } from './stations-table/stations-table.component';
import { StatusBroadComponent } from './status-broad/status-broad.component';



@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    routing,
  ],
  exports: [
    MonitorComponent,
  ],
  providers: [
  ],
  declarations: [
    MainComponent,
    MonitorComponent,
    DetailComponent,
    SettingComponent,
    SideSettingComponent,
    OutsideDirective,
    StationsTableComponent,
    StatusBroadComponent
  ],
  entryComponents: [
    MainComponent
  ]
})
export class MainModule { }
