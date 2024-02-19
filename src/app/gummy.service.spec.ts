import { TestBed } from '@angular/core/testing';

import { GummyService } from './gummy.service';

describe('GummyService', () => {
  let service: GummyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GummyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
