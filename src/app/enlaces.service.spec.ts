/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { EnlacesService } from './enlaces.service';

describe('Service: Enlaces', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnlacesService]
    });
  });

  it('should ...', inject([EnlacesService], (service: EnlacesService) => {
    expect(service).toBeTruthy();
  }));
});
