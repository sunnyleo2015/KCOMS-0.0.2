import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideSettingComponent } from './side-setting.component';

describe('SideSettingComponent', () => {
  let component: SideSettingComponent;
  let fixture: ComponentFixture<SideSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
