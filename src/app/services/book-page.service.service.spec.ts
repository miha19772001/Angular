import { TestBed } from '@angular/core/testing';

import { BookPageService } from './book-page.service.service';

describe('BookPage.ServiceService', () => {
  let service: BookPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
