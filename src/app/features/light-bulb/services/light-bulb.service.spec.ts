import { TestBed } from '@angular/core/testing';

import { LightBulbService } from './light-bulb.service';

describe('LightBulbService', () => {
  let service: LightBulbService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
      ],
      providers: [
        LightBulbService,
      ]
    });

    service = TestBed.get(LightBulbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateLightBulbResult', () => {
    let calculateTheShortWaySpy;
    let calculateTheLongWaySpy;
    beforeEach(() => {
      calculateTheShortWaySpy = spyOn(service, 'calculateTheShortWay')
        .and
        .callFake(() => {});
      calculateTheLongWaySpy = spyOn(service, 'calculateTheLongWay')
        .and
        .callFake(() => {});
    });

    it('should call the shortway when the lightbulbs length are less then or equal to people length', () => {
      let lightBulbs = 100;
      let people = 100;
      service.calculateLightBulbResult(lightBulbs, people);

      expect(service.calculateTheShortWay).toHaveBeenCalledTimes(1);
      expect(service.calculateTheShortWay).toHaveBeenCalledWith(lightBulbs, people);

      calculateTheShortWaySpy.calls.reset();
      calculateTheLongWaySpy.calls.reset();

      lightBulbs = 99;
      people = 100;
      service.calculateLightBulbResult(lightBulbs, people);

      expect(service.calculateTheShortWay).toHaveBeenCalledTimes(1);
      expect(service.calculateTheShortWay).toHaveBeenCalledWith(lightBulbs, people);

      lightBulbs = 100;
      people = 99;
      service.calculateLightBulbResult(lightBulbs, people);

      expect(service.calculateTheLongWay).toHaveBeenCalledTimes(1);
      expect(service.calculateTheLongWay).toHaveBeenCalledWith(lightBulbs, people);
    });
  });

  describe('calculateTheShortWay', () => {
    it('should calculate the proper result for the first 10 factors', () => {
      let factor = 1;
      let lightBulbs = Math.pow(factor, 2);
      let people = Math.pow(factor, 2);
      let shortWayResult = service.calculateTheShortWay(lightBulbs, people);

      expect(shortWayResult.lightsOn).toEqual([1]);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);

      expect(shortWayResult.lightsOn).toEqual([1, 4]);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);

      expect(shortWayResult.lightsOn).toEqual([1, 4, 9]);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);

      expect(shortWayResult.lightsOn).toEqual([1, 4, 9, 16]);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);

      expect(shortWayResult.lightsOn).toEqual([1, 4, 9, 16, 25]);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);

      expect(shortWayResult.lightsOn).toEqual([1, 4, 9, 16, 25, 36]);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);

      expect(shortWayResult.lightsOn).toEqual([1, 4, 9, 16, 25, 36, 49]);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);

      expect(shortWayResult.lightsOn).toEqual([1, 4, 9, 16, 25, 36, 49, 64]);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);

      expect(shortWayResult.lightsOn).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81]);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);

      expect(shortWayResult.lightsOn).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
    });
  });









  describe('Compare Calculations', () => {

    it('should call the shortway when the lightbulbs length are less then or equal to people length', () => {
      let factor = 1;
      let lightBulbs = Math.pow(factor, 2);
      let people = Math.pow(factor, 2);
      let shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      let longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      factor++;
      lightBulbs = Math.pow(factor, 2);
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      lightBulbs = Math.pow(factor, 2) - 3;
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      lightBulbs = Math.pow(factor, 2) - 5;
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      lightBulbs = Math.pow(factor, 2) - 15;
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);

      lightBulbs = Math.pow(factor, 2) - 150;
      people = Math.pow(factor, 2);
      shortWayResult = service.calculateTheShortWay(lightBulbs, people);
      longWayResult = service.calculateTheLongWay(lightBulbs, people);

      expect(shortWayResult).toEqual(longWayResult);
    });
  });
});
