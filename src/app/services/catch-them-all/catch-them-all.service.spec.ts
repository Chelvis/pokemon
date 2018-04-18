import { TestBed, inject } from '@angular/core/testing';

import { CatchThemAllService } from './catch-them-all.service';

describe('CatchThemAllService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatchThemAllService]
    });
  });

  it('should be created', inject([CatchThemAllService], (service: CatchThemAllService) => {
    expect(service).toBeTruthy();
  }));
});
