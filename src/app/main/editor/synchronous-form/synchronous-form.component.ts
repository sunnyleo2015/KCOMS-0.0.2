import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-synchronous-form',
  templateUrl: './synchronous-form.component.html',
  styleUrls: ['./synchronous-form.component.scss']
})
export class SynchronousFormComponent implements OnInit {
  validateForm: FormGroup;
  @Input() station;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.validateForm = this.formBuilder.group({
      attr1: ['12321', null],
      attr2: [null, null],
      attr3: [null, null],
      select: [ 'China' ],
      protocol_processing: ['02']
    });
  }

  getFormControl(name) {
    return this.validateForm.controls[ name ];
  }

  _submitForm(){

  }
}
