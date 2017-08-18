import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { routing } from './main.route';
import { MonitorComponent } from './monitor/monitor.component';
import { DetailComponent } from './detail/detail.component';
import { SettingComponent } from './setting/setting.component';
import { SideSettingComponent } from './side-setting/side-setting.component';
import { OutsideDirective } from '../directive/outside.directive';
import { StationsTableComponent } from './stations-table/stations-table.component';
import { StatusBroadComponent } from './status-broad/status-broad.component';
import { EditorComponent } from './editor/editor.component';
import { SynchronousFormComponent } from './editor/synchronous-form/synchronous-form.component';



@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
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
    StatusBroadComponent,
    EditorComponent,
    SynchronousFormComponent
  ],
  entryComponents: [
    MainComponent
  ]
})
export class MainModule { }
