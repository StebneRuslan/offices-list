import { TestBed } from '@angular/core/testing';

import { OfficeService } from './office.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('OfficeService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: OfficeService = TestBed.get(OfficeService);
    expect(service).toBeTruthy();
  });
});
