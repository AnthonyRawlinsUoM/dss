import { TestBed } from '@angular/core/testing';

import { SessionLogService } from './session-log.service';

describe('SessionLogService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionLogService = TestBed.get(SessionLogService);
    expect(service).toBeTruthy();
  });
});
