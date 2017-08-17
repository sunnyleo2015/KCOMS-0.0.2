import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-status-broad',
  templateUrl: './status-broad.component.html',
  styleUrls: ['./status-broad.component.scss']
})
export class StatusBroadComponent implements OnInit, OnChanges {

  @Input() stations;

  station = {id: '', status: 0};
  checkedStations = [];
  stationType = 'all';

  warn_number: number = 0;
  error_number: number = 0;

  warn_station = [];
  error_station = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes){
    _.forEach(this.stations,(station)=>{if(station.status === 0){this.warn_station.push(station)};});
    this.warn_number = this.warn_station.length;

    _.forEach(this.stations,(station)=>{if(station.status === 3){this.error_station.push(station)};});
    this.error_number = this.error_station.length;
  }

  _checked(station){
      if(station &&　station.checked){
        _.remove(this.checkedStations,(event)=>{
          return event.id === station.id;
        })
      }else {
        this.checkedStations.unshift(station);
      }
      station.checked = !station.checked;
  }

  _checkedAll(){
    switch (this.stationType){
      case 'warnAndError':
        _.forEach(this.stations,(station)=>{if(station.status === 0 || station.status === 3){station.checked = true}});
        break;
      case 'warn':
        _.forEach(this.stations,(station)=>{if(station.status === 0){station.checked = true}});
        break;
      case 'error':
        _.forEach(this.stations,(station)=>{if(station.status === 3){station.checked = true}});
        break;
      case 'normal':
        _.forEach(this.stations,(station)=>{if(station.status !== 0 && station.status !==3){station.checked = true}});
        break;
      case 'all':
        _.forEach(this.stations,(station)=>{station.checked = true});
        break;
    }
  }

  _toggleChecked(){
    switch (this.stationType){
      case 'warnAndError':
        _.forEach(this.stations,(station)=>{if(station.status === 0 || station.status === 3){station.checked = !station.checked}});
        break;
      case 'warn':
        _.forEach(this.stations,(station)=>{if(station.status === 0){station.checked = !station.checked}});
        break;
      case 'error':
        _.forEach(this.stations,(station)=>{if(station.status === 3){station.checked = !station.checked}});
        break;
      case 'normal':
        _.forEach(this.stations,(station)=>{if(station.status !== 0 && station.status !== 3){station.checked = !station.checked}});
        break;
      case 'all':
        _.forEach(this.stations,(station)=>{station.checked = !station.checked});
        break;
    }
  }

  _refreshStation(){

  }

  changeBaseStation(station){
    this.station = station;
  }

}
