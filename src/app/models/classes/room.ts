import { LightBulb } from './light-bulb';
import { Person } from './person';

export class Room {
  private _lightBulbs: Array<LightBulb>;
  /**
   * Get All of the lights
   * @returns {Array<LightBulb>}
   */
  get lightBulbs(): Array<LightBulb> {
    return this._lightBulbs;
  }

  /**
   * Get All the lights that are off
   * @returns {Array<LightBulb>} - LightBulb Array
   */
  get lightBublsOn(): Array<LightBulb> {
    return this._lightBulbs.filter(lightBulb => lightBulb.isLightOn);
  }

  /**
   * Get All the Lights that are on
   * @returns {Array<LightBulb>}
   */
  get lightBublsOff(): Array<LightBulb> {
    return this._lightBulbs.filter(lightBulb => !lightBulb.isLightOn);
  }

  /**
   * Class Constructor function, send in the lightbulb cound and create the room with all of the lights
   * @param {number} lightBulbCount
   */
  constructor(lightBulbCount: number) {
    this._lightBulbs = [];
    for (let i = 0; i < lightBulbCount; i++) {
      this._lightBulbs.push(new LightBulb(i));
    }
  }

  /**
   * Have the person enter the room
   * @param {Person} person
   */
  enter(person: Person) {
    // Once a person enters the room loop though the lighbulbs switching them off, adding their id to the array index so person 1 will flip
    // all switches, person 2 will switch every other and so on
    // Person id is base 0, array index is 0 based, start with one lower then the person id
    // i.e. person 1 will start with the index 0, person 2 will start with index 1(since that is the second element)
    for (let i = person.id - 1; i < this._lightBulbs.length; i += person.id) {
      this._lightBulbs[i].toggleLight();
    }
  }
}
