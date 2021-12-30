import { TestBed } from '@angular/core/testing';

import { GetUrlCityService } from './get-url-city.service';

describe('GetUrlCityService', () => {
  let service: GetUrlCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUrlCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
