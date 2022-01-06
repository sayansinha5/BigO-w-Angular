import { TestBed } from '@angular/core/testing';

import { SortingalgolistService } from './sortingalgolist.service';

describe('SortingalgolistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SortingalgolistService = TestBed.get(SortingalgolistService);
    expect(service).toBeTruthy();
  });
});
