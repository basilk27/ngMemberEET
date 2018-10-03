import { TestBed } from '@angular/core/testing';

import { MeanuStateService } from './meanu-state.service';

describe('MeanuStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeanuStateService = TestBed.get(MeanuStateService);
    expect(service).toBeTruthy();
  });
});
