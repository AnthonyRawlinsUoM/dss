import { TestBed } from '@angular/core/testing';

import { ObservableDataService } from './observable-data.service';

describe('ObservableDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ObservableDataService = TestBed.get(ObservableDataService);
    expect(service).toBeTruthy();
  });
});
