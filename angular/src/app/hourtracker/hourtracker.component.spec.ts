import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourtrackerComponent } from './hourtracker.component';

describe('HourtrackerComponent', () => {
  let component: HourtrackerComponent;
  let fixture: ComponentFixture<HourtrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourtrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourtrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
