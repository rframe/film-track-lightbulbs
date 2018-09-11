import { inject, TestBed } from '@angular/core/testing';

import { LightBulbResolver } from './light-bulb.resolver';
import * as testMocks from '../../../models/helpers/test-mocks';
import { LightBulbService } from './light-bulb.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { LightBulbResult } from '../../../models/classes/light-bulb-result';

describe('LightBulbResolver', () => {
  let mocks: {
    lightBulbService: LightBulbService,
    resolver: LightBulbResolver
  };
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      providers: [
        {provide: LightBulbService, useClass: testMocks.LightBulbServiceMock},
        LightBulbResolver,
      ]
    });
  });

  beforeEach(inject([LightBulbService, LightBulbResolver],
    (lightBulbService: LightBulbService, resolver: LightBulbResolver) => {
      mocks = {
        lightBulbService,
        resolver
      };
    }));

  it('should be created', () => {
    expect(mocks.resolver).toBeTruthy();
  });

  it('should call the lightbulb service calculate light bulb result and return the proper value', () => {
    const lightBulbResult = {lightbulbs: 32, people: 16, lightsOn: [1, 4, 9]} as LightBulbResult;
    const lightbulbsParam = 100;
    const peopleParam = 120;
    spyOn(mocks.lightBulbService, 'calculateLightBulbResult')
      .and
      .returnValue(lightBulbResult);

    const activatedRouteSnapshot: ActivatedRouteSnapshot = {
      paramMap: {
        get(key) {
          if (key === 'lightbulbs') {
            return lightbulbsParam;
          }
          if (key === 'people') {
            return peopleParam;
          }
          return 0;
        }
      }
    } as any as ActivatedRouteSnapshot;

    const result = mocks.resolver.resolve(activatedRouteSnapshot, null);

    expect(result).toBe(lightBulbResult);

    expect(mocks.lightBulbService.calculateLightBulbResult)
      .toHaveBeenCalledTimes(1);
    expect(mocks.lightBulbService.calculateLightBulbResult)
      .toHaveBeenCalledWith(lightbulbsParam, peopleParam);
  });
});
