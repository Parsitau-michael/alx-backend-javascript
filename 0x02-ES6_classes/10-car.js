const CloneSymbol = Symbol('clone');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return this[CloneSymbol]();
  }

  [CloneSymbol]() {
    return new this.constructor(undefined, undefined, undefined);
  }
}
