import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { LightBulbResult } from '../../../models/classes/light-bulb-result';
import { Observable } from 'rxjs';
import { LightBulbService } from './light-bulb.service';

@Injectable()
export class LightBulbResolver implements Resolve<LightBulbResult> {

  /**
   * Class Constructor Function
   * @param {LightBulbService} _lightBulbService
   */
  constructor(private _lightBulbService: LightBulbService) {
  }

  /**
   * Resolve function
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<LightBulbResult> | Promise<LightBulbResult> | LightBulbResult}
   */
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<LightBulbResult> | Promise<LightBulbResult> | LightBulbResult {
    const lightbulbs = this.getNumberFromParamMap(route, 'lightbulbs');
    const people = this.getNumberFromParamMap(route, 'people');
    return this._lightBulbService.calculateLightBulbResult(lightbulbs, people);
  }

  /**
   * Helper function to get a number from the string in the route
   * @param {ActivatedRouteSnapshot} route
   * @param key
   * @returns {number}
   */
  private getNumberFromParamMap(route: ActivatedRouteSnapshot, key) {
    const paramString = route.paramMap.get(key);
    const paramNumber = paramString && Number(paramString);
    return !isNaN(Number(paramNumber)) ? paramNumber : null;
  }
}
