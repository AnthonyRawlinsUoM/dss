import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchReducerComponent } from './batch-reducer.component';

describe('BatchReducerComponent', () => {
  let component: BatchReducerComponent;
  let fixture: ComponentFixture<BatchReducerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchReducerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchReducerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
