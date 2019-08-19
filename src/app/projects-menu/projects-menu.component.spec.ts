import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricsMenuComponent } from './metrics-menu.component';

describe('MetricsMenuComponent', () => {
  let component: MetricsMenuComponent;
  let fixture: ComponentFixture<MetricsMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricsMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
