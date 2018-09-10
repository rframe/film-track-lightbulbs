export class LightBulbResult {
  private _lightbulbs?: number;
  /**
   * The quantity of lightbulbs in the room
   * @returns {number | undefined}
   */
  get lightbulbs() {
    return this._lightbulbs;
  }

  private _people?: number;
  /**
   * The quantity of people entering the room
   * @returns {number | undefined}
   */
  get people() {
    return this._people;
  }

  private _lightsOn?: Array<number>;
  /**
   * An array of id's for lights that are on
   * @returns {Array<number> | undefined | any[]}
   */
  get lightsOn() {
    return this._lightsOn || [];
  }

  /**
   * Class constructor function
   * @param {number | null} lightbulbs
   * @param {number | null} people
   * @param {Array<number>} lightsOn
   */
  constructor(lightbulbs: number | null, people: number | null, lightsOn?: Array<number>) {
    this._lightbulbs = lightbulbs;
    this._people = people;
    this._lightsOn = lightsOn;
  }
}
