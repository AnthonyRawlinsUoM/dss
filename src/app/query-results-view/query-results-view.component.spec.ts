import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryResultsViewComponent } from './query-results-view.component';

describe('QueryResultsViewComponent', () => {
  let component: QueryResultsViewComponent;
  let fixture: ComponentFixture<QueryResultsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryResultsViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryResultsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
