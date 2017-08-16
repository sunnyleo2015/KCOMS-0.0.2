import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { routing } from './main.route';
import { MonitorComponent } from './monitor/monitor.component';
import { RebirthNGModule } from 'rebirth-ng';
import { DetailComponent } from './detail/detail.component';
import { SettingComponent } from './setting/setting.component';
import { SideSettingComponent } from './side-setting/side-setting.component';
import { HightlightDirective } from '../directive/hightlight.directive';
import { OutsideDirective } from '../directive/outside.directive';



@NgModule({
  imports: [
    CommonModule,
    routing,
    RebirthNGModule,
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
    HightlightDirective,
    OutsideDirective
  ],
  entryComponents: [
    MainComponent
  ]
})
export class MainModule { }
