import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpatioTemporalQueryFormComponent } from './spatio-temporal-query-form.component';

describe('SpatioTemporalQueryFormComponent', () => {
  let component: SpatioTemporalQueryFormComponent;
  let fixture: ComponentFixture<SpatioTemporalQueryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpatioTemporalQueryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpatioTemporalQueryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
