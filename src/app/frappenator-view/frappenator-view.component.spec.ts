import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrappenatorViewComponent } from './frappenator-view.component';

describe('FrappenatorViewComponent', () => {
  let component: FrappenatorViewComponent;
  let fixture: ComponentFixture<FrappenatorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrappenatorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrappenatorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
