import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeafletViewComponent } from './leaflet-view.component';

describe('LeafletViewComponent', () => {
  let component: LeafletViewComponent;
  let fixture: ComponentFixture<LeafletViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeafletViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeafletViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
