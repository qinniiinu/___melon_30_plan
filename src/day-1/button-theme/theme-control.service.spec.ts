import { TestBed } from '@angular/core/testing';

import { ThemeControlService } from './theme-control.service';

describe('ThemeControlService', () => {
  let service: ThemeControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
