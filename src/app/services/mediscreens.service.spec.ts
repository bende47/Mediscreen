import { TestBed } from '@angular/core/testing';

import { MediscreensService } from './mediscreens.service';

describe('MediscreensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MediscreensService = TestBed.get(MediscreensService);
    expect(service).toBeTruthy();
  });
});
