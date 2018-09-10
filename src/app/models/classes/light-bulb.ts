export class LightBulb {
  private _id?: number;
  /**
   * Id, 1 based id of the lightbulb
   * @returns {number}
   */
  get id() {
    return this._id + 1;
  }

  /**
   * Is the Light On, true if the light is on
   */
  private _isLightOn: boolean;
  get isLightOn(): boolean {
    return this._isLightOn;
  }

  /**
   * Class constructor function
   * @param {number} id
   */
  constructor(id: number) {
    this._id = id;
  }

  /**
   * Toggle light to the on or off switch, if light is currently on it will turn off
   * This is the light switch
   */
  toggleLight() {
    this._isLightOn = !this._isLightOn;
  }
}
