import { TestBed } from '@angular/core/testing';

import { LightBulbResolver } from './light-bulb.resolver';
import * as testMocks from '../../../models/helpers/test-mocks';
import { LightBulbService } from './light-bulb.service';

describe('LightBulbResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      providers: [
        {provide: LightBulbService, useClass: testMocks.LightBulbServiceMock},
        LightBulbResolver,
      ]
    });
  });
  it('should be created', () => {
    const service: LightBulbResolver = TestBed.get(LightBulbResolver);
    expect(service).toBeTruthy();
  });
});
