import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportTaskCollectionComponent } from './import-task-collection.component';

describe('ImportTaskCollectionComponent', () => {
  let component: ImportTaskCollectionComponent;
  let fixture: ComponentFixture<ImportTaskCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportTaskCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportTaskCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
