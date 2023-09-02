import { TestBed } from '@angular/core/testing';

import { BackendSecurityServicesService } from './backend-security-services.service';

describe('BackendSecurityServicesService', () => {
  let service: BackendSecurityServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackendSecurityServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
