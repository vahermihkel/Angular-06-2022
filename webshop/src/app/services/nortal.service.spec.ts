import { TestBed } from '@angular/core/testing';

import { NortalService } from './nortal.service';

describe('NortalService', () => {
  let service: NortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
