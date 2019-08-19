import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DssFileCollectionComponent } from './dss-file-collection.component';

describe('DssFileCollectionComponent', () => {
  let component: DssFileCollectionComponent;
  let fixture: ComponentFixture<DssFileCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DssFileCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DssFileCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
