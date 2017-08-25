import { Component, OnInit, Input } from '@angular/core';
import { modal } from '../../service/models/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modal: modal;

  constructor() { }

  ngOnInit() {
  }

}
