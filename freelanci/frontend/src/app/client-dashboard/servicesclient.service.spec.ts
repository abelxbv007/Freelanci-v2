import { TestBed } from '@angular/core/testing';

import { ServicesclientService } from './servicesclient.service';

describe('ServicesclientService', () => {
  let service: ServicesclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
