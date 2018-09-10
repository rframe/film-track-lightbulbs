import { Injectable } from '@angular/core';
import { LightBulbResult } from '../../../models/classes/light-bulb-result';
import { Room } from '../../../models/classes/room';
import { Person } from '../../../models/classes/person';

@Injectable()
export class LightBulbService {

  constructor() { }

  /**
   * Calculate the light bulb Result
   * @param {number} lightbulbsCount
   * @param {number} peopleCount
   * @returns {LightBulbResult}
   */
  calculateLightBulbResult(lightbulbsCount: number, peopleCount: number) {
    // check if there are less people then light bulbs, if there are it needs to be calculated differently
    return lightbulbsCount > peopleCount ?
      this.calculateTheLongWay(lightbulbsCount, peopleCount) :
      this.calculateTheShortWay(lightbulbsCount, peopleCount);
  }

  /**
   * If there are more or equal people to bulbs we can calculate based on the squares
   * @param {number} lightbulbsCount
   * @param {number} peopleCount
   * @returns {LightBulbResult}
   */
  calculateTheShortWay(lightbulbsCount: number, peopleCount: number) {
    // index is the highest number with a square inside the light bulb count, this and all the
    // numbers less that it can be used to calculate the bulb indexes
    let index = Math.floor(Math.sqrt(lightbulbsCount));
    const lights = [];
    while (index > 0) {
      lights.push(Math.pow(index, 2));
      index--;
    }
    return new LightBulbResult(lightbulbsCount, peopleCount, lights.reverse());
  }

  /**
   * If there are fewer people then lights the Result must be calculated manually
   * @param {number} lightbulbsCount
   * @param {number} peopleCount
   * @returns {LightBulbResult}
   */
  calculateTheLongWay(lightbulbsCount: number, peopleCount: number) {
    const room = new Room(lightbulbsCount);
    const people: Array<Person> = [];

    for (let i = 0; i < peopleCount; i++) {
      people.push(new Person(i));
    }

    people.forEach(person => room.enter(person));

    return new LightBulbResult(lightbulbsCount, peopleCount, room.lightBublsOn.map(x => x.id), room.lightBublsOff.map(x => x.id));
  }
}
