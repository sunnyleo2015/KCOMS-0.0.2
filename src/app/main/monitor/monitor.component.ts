import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MonitorComponent implements OnInit {
  baseStationList = []
  baseStation = {id: '', status: 0};

  constructor(private router: Router) { }

  ngOnInit() {
    for(let i = 0; i<1000;i++){
      this.baseStationList.push({
        id: `200017182-${i}`,
        status: i%128
      });
    }

    this.baseStation = this.baseStationList[0];
  }

  changeBaseStation(station){
    this.baseStation = station;
  }

  toStationDetail(){
    this.router.navigate(['./main/detail',{'id': this.baseStation.id}]);
  }
}
