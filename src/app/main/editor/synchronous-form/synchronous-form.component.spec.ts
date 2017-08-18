import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronousFormComponent } from './synchronous-form.component';

describe('SynchronousFormComponent', () => {
  let component: SynchronousFormComponent;
  let fixture: ComponentFixture<SynchronousFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SynchronousFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SynchronousFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
