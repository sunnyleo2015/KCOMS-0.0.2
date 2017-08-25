import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { NzModalService } from 'ng-zorro-antd';
import { StationService } from '../../service/station.service';

import * as _ from 'lodash';
@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],

})
export class MonitorComponent implements OnInit {
  connect: boolean;
  baseStations = []
  checkedStation = [];
  settingStation;
  checkedTableItems = [];

  stationSub;

  constructor(private router: Router, private modal: NzModalService, private stationService: StationService) { }

  ngOnInit() {
    this.stationService.getStationsStatus();

    this.stationSub = this.stationService.baseStations.subscribe((res)=>{
      this.baseStations = res;
    });
  }

  toStationDetail(){
    this.router.navigate(['./main/detail']);
  }

  refreshStation(stations){
    this.checkedStation = stations;
  }

  _stationSetting(station){
     this.settingStation = station;
  }

  _refreshCheckedStation(checkedStations){
    this.checkedTableItems = checkedStations;
  }

  startStations(){
    console.log(this.checkedTableItems);
  }

  restartStations(){
    console.log(this.checkedTableItems);
  }

  closeStations(){
    console.log(this.checkedTableItems);
  }

  settingStations(){
    console.log(this.checkedTableItems);
  }


  showRenderModal(){
    const modal = this.modal.confirm({
      title   : '是否启动监测',
      content : '立即启动基站监控？',
      okText: '启动',
      closable: false,
      onOk() {
        console.log('ok')
      },
      onCancel() {
      }
    })
  }

  ngOnDestroy(){
    this.stationSub.unsubscribe();
  }
}
