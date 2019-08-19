import { TestBed } from '@angular/core/testing';

import { NthColorServiceService } from './nth-color-service.service';

describe('NthColorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NthColorServiceService = TestBed.get(NthColorServiceService);
    expect(service).toBeTruthy();
  });
});
