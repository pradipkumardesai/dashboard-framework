import { TestBed, inject } from '@angular/core/testing';

import { GridsterConfigService } from './gridster-config.service';

describe('GridsterConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GridsterConfigService]
    });
  });

  it('should be created', inject([GridsterConfigService], (service: GridsterConfigService) => {
    expect(service).toBeTruthy();
  }));
});
