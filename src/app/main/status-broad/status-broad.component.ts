import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
@Component({
  selector: 'app-status-broad',
  templateUrl: './status-broad.component.html',
  styleUrls: ['./status-broad.component.scss']
})
export class StatusBroadComponent implements OnInit, OnChanges {

  @Input() stations;
  @Output() refreshStarion: EventEmitter<any> = new EventEmitter();

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

  _toggle(station){
    if(station &&　station._checked){
      _.remove(this.checkedStations,(event)=>{
        return event.id === station.id;
      })
    }else {
      this.checkedStations.unshift(station);
    }
    station._checked = !station._checked;
    this._refreshStation();
  }

  _checked(station) {
    station._checked = true;
    this.checkedStations.unshift(station);
    this._refreshStation();
  }

  _unchecked(station) {
    station._checked = false;
    _.remove(this.checkedStations,(event)=>{
      return event.id === station.id;
    })
    this._refreshStation();
  }

  _checkedAll(){
    switch (this.stationType){
      case 'warnAndError':
        _.forEach(this.stations,(station)=>{if(station.status === 0 || station.status === 3){this._checked(station);}});
        break;
      case 'warn':
        _.forEach(this.stations,(station)=>{if(station.status === 0){this._checked(station);}});
        break;
      case 'error':
        _.forEach(this.stations,(station)=>{if(station.status === 3){this._checked(station);}});
        break;
      case 'normal':
        _.forEach(this.stations,(station)=>{if(station.status !== 0 && station.status !==3){this._checked(station);}});
        break;
      case 'all':
        _.forEach(this.stations,(station)=>{this._checked(station);});
        break;
    }
    this._refreshStation();
  }

  _uncheckedAll(){
    switch (this.stationType){
      case 'warnAndError':
        _.forEach(this.stations,(station)=>{if(station.status === 0 || station.status === 3){station._checked = false;}});
        _.remove(this.checkedStations,(station)=>{
          return station.status === 0 || station.status === 3;
        });
        this._refreshStation();
        break;
      case 'warn':
        _.forEach(this.stations,(station)=>{if(station.status === 0){station._checked = false;}});
        _.remove(this.checkedStations,(station)=>{
          return station.status === 0;
        });
        this._refreshStation();
        break;
      case 'error':
        _.forEach(this.stations,(station)=>{if(station.status === 3){station._checked = false;}});
        _.remove(this.checkedStations,(station)=>{
          return station.status === 3;
        });
        this._refreshStation();
        break;
      case 'normal':
        _.forEach(this.stations,(station)=>{if(station.status !== 0 && station.status !==3){station._checked = false;}});
        _.remove(this.checkedStations,(station)=>{
          return station.status !== 0 && station.status !==3;
        });
        this._refreshStation();
        break;
      case 'all':
        _.forEach(this.stations,(station)=>{station._checked = false;});
        this.checkedStations = [];
        this._refreshStation();
        break;
    }
  }


  _toggleChecked(){
    switch (this.stationType){
      case 'warnAndError':
        _.forEach(this.stations,(station)=>{if(station.status === 0 || station.status === 3){ this._toggle(station);}});
        break;
      case 'warn':
        _.forEach(this.stations,(station)=>{if(station.status === 0){this._toggle(station);}});
        break;
      case 'error':
        _.forEach(this.stations,(station)=>{if(station.status === 3){this._toggle(station);}});
        break;
      case 'normal':
        _.forEach(this.stations,(station)=>{if(station.status !== 0 && station.status !== 3){this._toggle(station);}});
        break;
      case 'all':
        _.forEach(this.stations,(station)=>{this._toggle(station);});
        break;
    }
  }

  _refreshStation(){
    let checkedStation = [];
    switch (this.stationType){
      case 'warnAndError':
        _.forEach(this.checkedStations,(station)=>{if(station.status === 0 || station.status === 3){checkedStation.push(station)}});
        break;
      case 'warn':
        _.forEach(this.checkedStations,(station)=>{if(station.status === 0){checkedStation.push(station)}});
        break;
      case 'error':
        _.forEach(this.checkedStations,(station)=>{if(station.status === 3){checkedStation.push(station)}});
        break;
      case 'normal':
        _.forEach(this.checkedStations,(station)=>{if(station.status !== 0 && station.status !==3){checkedStation.push(station)}});
        break;
      case  'checked':
        _.forEach(this.checkedStations,(station)=>{checkedStation.push(station)});
        break;
      case 'all':
        _.forEach(this.checkedStations,(station)=>{checkedStation.push(station)});
        break;
    }
    this.refreshStarion.emit(checkedStation);
  }

  changeBaseStation(station){
    this.station = station;
  }

}
