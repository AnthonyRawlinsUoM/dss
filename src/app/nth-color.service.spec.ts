import { TestBed } from '@angular/core/testing';

import { NthColorService } from './nth-color.service';

describe('NthColorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NthColorService = TestBed.get(NthColorService);
    expect(service).toBeTruthy();
  });
});
