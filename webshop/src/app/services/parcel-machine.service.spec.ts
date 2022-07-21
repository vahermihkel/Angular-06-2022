import { TestBed } from '@angular/core/testing';

import { ParcelMachineService } from './parcel-machine.service';

describe('ParcelMachineService', () => {
  let service: ParcelMachineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParcelMachineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
