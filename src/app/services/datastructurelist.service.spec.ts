import { TestBed } from '@angular/core/testing';

import { DatastructurelistService } from './datastructurelist.service';

describe('DatastructurelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatastructurelistService = TestBed.get(DatastructurelistService);
    expect(service).toBeTruthy();
  });
});
