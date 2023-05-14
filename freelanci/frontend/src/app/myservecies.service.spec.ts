import { TestBed } from '@angular/core/testing';

import { MyserveciesService } from './myservecies.service';

describe('MyserveciesService', () => {
  let service: MyserveciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyserveciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
