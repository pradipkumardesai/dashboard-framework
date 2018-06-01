import { TestBed, inject } from '@angular/core/testing';

import { SlideInService } from './slide-in.service';

describe('SlideInService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideInService]
    });
  });

  it('should be created', inject([SlideInService], (service: SlideInService) => {
    expect(service).toBeTruthy();
  }));
});
