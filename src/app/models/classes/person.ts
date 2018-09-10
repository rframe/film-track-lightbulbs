export class Person {
  private _id: number;
  /**
   * Id 1 based id of the person
   * @returns {number}
   */
  get id() {
    return this._id + 1;
  }

  /**
   * Class Constructor Function
   * @param {number} id
   */
  constructor(id: number) {
    this._id = id;
  }
}
