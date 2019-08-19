import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DssFileViewComponent } from './dss-file-view.component';

describe('DssFileViewComponent', () => {
  let component: DssFileViewComponent;
  let fixture: ComponentFixture<DssFileViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DssFileViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DssFileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
