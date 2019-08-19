import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapboxViewComponent } from './mapbox-view.component';

describe('MapboxViewComponent', () => {
  let component: MapboxViewComponent;
  let fixture: ComponentFixture<MapboxViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapboxViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapboxViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
