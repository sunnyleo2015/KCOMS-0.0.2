import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { modal } from './models/modal';

@Injectable()

export class StatusService {

  public MODAL: Subject<modal> = new Subject<modal>();

  constructor() { }

  setModal(modal){
    this.MODAL.next(modal);
  }
}
