import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-stations-table',
  templateUrl: './stations-table.component.html',
  styleUrls: ['./stations-table.component.scss']
})
export class StationsTableComponent implements OnInit {

  @Input() station;
  @Output() toDetail: EventEmitter<any> = new EventEmitter();
  @Output() refreshStation: EventEmitter<any> = new EventEmitter();

  idSort = false;
  _allChecked = false;
  _indeterminate = false;
  _checkedStation = [];

  _displayDataChange($event) {
    this._checkedStation = $event;
    this._refreshStatus();
  };

  _refreshStatus() {
    const allChecked = this._checkedStation.every(value => value.checked === true);
    const allUnChecked = this._checkedStation.every(value => !value.checked);
    this._allChecked = allChecked;
    this._indeterminate = (!allChecked) && (!allUnChecked);
    let checkedStation = [];
    _.forEach(this._checkedStation, (station)=>{ if(station.checked){checkedStation.push(station)}})
    this.refreshStation.emit(checkedStation);
  };

  _checkAll(value) {
    if (value) {
      this._checkedStation.forEach(data => {
        data.checked = true;
      });
    } else {
      this._checkedStation.forEach(data => {
        data.checked = false;
      });
    }
    this._refreshStatus();
  };

  idSortChange($event) {
    if ($event === 'ascend') {
      this.station = _.sortBy(this.station, (station)=> {
        return station.id
      });
    } else if ($event === 'descend') {
      this.station = _.sortBy(this.station, (station)=> {
        return -station.id
      });
    }
  }

  constructor() { }

  ngOnInit() {
  }

  _toDetail(station){
    this.toDetail.emit(station);
  }

}
