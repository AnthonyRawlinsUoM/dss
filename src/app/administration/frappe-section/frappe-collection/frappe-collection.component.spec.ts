import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrappeCollectionComponent } from './frappe-collection.component';

describe('FrappeCollectionComponent', () => {
  let component: FrappeCollectionComponent;
  let fixture: ComponentFixture<FrappeCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrappeCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrappeCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
