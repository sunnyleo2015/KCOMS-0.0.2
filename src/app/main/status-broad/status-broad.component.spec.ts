import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBroadComponent } from './status-broad.component';

describe('StatusBroadComponent', () => {
  let component: StatusBroadComponent;
  let fixture: ComponentFixture<StatusBroadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusBroadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusBroadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
