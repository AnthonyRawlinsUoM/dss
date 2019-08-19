import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimePickerComponent } from './regime-picker.component';

describe('RegimePickerComponent', () => {
  let component: RegimePickerComponent;
  let fixture: ComponentFixture<RegimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
