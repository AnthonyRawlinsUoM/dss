import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportConfigCollectionComponent } from './import-config-collection.component';

describe('ImportConfigCollectionComponent', () => {
  let component: ImportConfigCollectionComponent;
  let fixture: ComponentFixture<ImportConfigCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportConfigCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportConfigCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
