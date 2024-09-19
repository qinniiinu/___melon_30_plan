import { TestBed } from '@angular/core/testing';

import { BroadcastWidthService } from './broadcast-width.service';

describe('BroadcastWidthService', () => {
  let service: BroadcastWidthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BroadcastWidthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
