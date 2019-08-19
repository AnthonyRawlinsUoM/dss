import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpatialInspectorComponent } from './spatial-inspector.component';

describe('SpatialInspectorComponent', () => {
  let component: SpatialInspectorComponent;
  let fixture: ComponentFixture<SpatialInspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpatialInspectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpatialInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
