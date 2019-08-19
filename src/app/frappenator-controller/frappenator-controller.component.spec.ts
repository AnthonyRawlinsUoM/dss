import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrappenatorControllerComponent } from './frappenator-controller.component';

describe('FrappenatorControllerComponent', () => {
  let component: FrappenatorControllerComponent;
  let fixture: ComponentFixture<FrappenatorControllerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrappenatorControllerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrappenatorControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
