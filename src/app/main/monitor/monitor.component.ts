import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
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

  constructor(private router: Router) { }

  ngOnInit() {
    for(let i = 0; i<500;i++){
      this.baseStations.push({
        id: `200017182-${i}`,
        status: parseInt(`${Math.random()*4}`),
        _checked: false
      });
    }
  }

  toStationDetail(){
    this.router.navigate(['./main/detail']);
  }

  refreshStation(stations){
    this.checkedStation = stations;
  }

}
