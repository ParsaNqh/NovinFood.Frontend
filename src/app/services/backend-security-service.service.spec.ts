import { TestBed } from '@angular/core/testing';

import { BackendSecurityServiceService } from './backend-security-service.service';

describe('BackendSecurityServiceService', () => {
  let service: BackendSecurityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendSecurityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
