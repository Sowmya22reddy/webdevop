import { TestBed, async, inject } from '@angular/core/testing';

import { EcommGuard } from './ecomm.guard';

describe('EcommGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EcommGuard]
    });
  });

  it('should ...', inject([EcommGuard], (guard: EcommGuard) => {
    expect(guard).toBeTruthy();
  }));
});
