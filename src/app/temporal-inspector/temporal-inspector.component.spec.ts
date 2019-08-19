import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemporalInspectorComponent } from './temporal-inspector.component';

describe('TemporalInspectorComponent', () => {
  let component: TemporalInspectorComponent;
  let fixture: ComponentFixture<TemporalInspectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemporalInspectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemporalInspectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
