import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalDetailComponent } from './temporal-detail.component';

describe('TemporalDetailComponent', () => {
  let component: TemporalDetailComponent;
  let fixture: ComponentFixture<TemporalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
