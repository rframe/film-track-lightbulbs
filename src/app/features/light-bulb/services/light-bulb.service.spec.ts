import { TestBed } from '@angular/core/testing';

import { LightBulbService } from './light-bulb.service';

describe('LightBulbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      providers: [
        LightBulbService,
      ]
    });
  });

  it('should be created', () => {
    const service: LightBulbService = TestBed.get(LightBulbService);
    expect(service).toBeTruthy();
  });
});
