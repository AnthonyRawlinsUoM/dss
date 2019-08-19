import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatasetDetailViewComponent } from './dataset-detail-view.component';

describe('DatasetDetailViewComponent', () => {
  let component: DatasetDetailViewComponent;
  let fixture: ComponentFixture<DatasetDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatasetDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatasetDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
