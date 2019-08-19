import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RawJsonViewComponent } from './raw-json-view.component';

describe('RawJsonViewComponent', () => {
  let component: RawJsonViewComponent;
  let fixture: ComponentFixture<RawJsonViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RawJsonViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RawJsonViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
