import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationsTableComponent } from './stations-table.component';

describe('StationsTableComponent', () => {
  let component: StationsTableComponent;
  let fixture: ComponentFixture<StationsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
