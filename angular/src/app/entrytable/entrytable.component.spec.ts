import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrytableComponent } from './entrytable.component';

describe('EntrytableComponent', () => {
  let component: EntrytableComponent;
  let fixture: ComponentFixture<EntrytableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntrytableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrytableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
