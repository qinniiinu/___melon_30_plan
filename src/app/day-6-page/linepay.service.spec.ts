import { TestBed } from '@angular/core/testing';

import { LinepayService } from './linepay.service';

describe('LinepayService', () => {
  let service: LinepayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinepayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
