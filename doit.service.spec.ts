import { TestBed } from '@angular/core/testing';

import { DoitService } from './doit.service';

describe('DoitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DoitService = TestBed.get(DoitService);
    expect(service).toBeTruthy();
  });
});
