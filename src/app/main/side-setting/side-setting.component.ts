import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'app-side-setting',
  templateUrl: './side-setting.component.html',
  styleUrls: ['./side-setting.component.scss'],
  exportAs: 'sideSitting',
  animations: [
    trigger('sideSettingStatue', [
      state('show', style({
        backgroundColor: '#fbfbfb',
        display: 'block',
        right: '0',
        opacity: '1'
      })),
      state('hide',   style({
        backgroundColor: '#fbfbfb',
        display: 'none',
        right: '-40vw',
        opacity: '0.5'
      })),
      transition('hide => show', animate('500ms ease-in')),
      transition('show => hide', animate('500ms ease-out'))
    ])
  ]
})
export class SideSettingComponent implements OnInit {
  showSideSetting:boolean = false;
  sideSettingStatus = 'hide';

  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.showSideSetting = !this.showSideSetting;
    this.showSideSetting?this.sideSettingStatus='show': this.sideSettingStatus='hide';
  }

  show(){
    this.showSideSetting = true;
    this.sideSettingStatus = 'show';
  }

  hide(){
    this.showSideSetting = false;
    this.sideSettingStatus = 'hide';
  }
}
