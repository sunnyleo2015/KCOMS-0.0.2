import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stations-table',
  templateUrl: './stations-table.component.html',
  styleUrls: ['./stations-table.component.scss']
})
export class StationsTableComponent implements OnInit {

  @Input() station;

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

  constructor() { }

  ngOnInit() {
  }

}
