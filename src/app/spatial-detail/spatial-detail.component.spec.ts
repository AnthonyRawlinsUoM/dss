import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpatialDetailComponent } from './spatial-detail.component';

describe('SpatialDetailComponent', () => {
  let component: SpatialDetailComponent;
  let fixture: ComponentFixture<SpatialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpatialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpatialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
