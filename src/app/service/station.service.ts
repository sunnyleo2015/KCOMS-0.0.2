import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'

@Injectable()

export class StationService {

  public baseStations: BehaviorSubject<any> = new BehaviorSubject([]);

  constructor() { }

  getStationsStatus(){
    let stations = [];
    for(let i = 0; i<500;i++){
      stations.push({
        id: i,
        status: parseInt(`${Math.random()*4}`),
        _checked: false
      });
    }
    this.baseStations.next(stations);
  }
}
