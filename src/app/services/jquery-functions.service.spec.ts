import { TestBed, inject } from '@angular/core/testing';

import { JqueryFunctionsService } from './jquery-functions.service';

describe('JqueryFunctionsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JqueryFunctionsService]
    });
  });

  it('should be created', inject([JqueryFunctionsService], (service: JqueryFunctionsService) => {
    expect(service).toBeTruthy();
  }));
});
