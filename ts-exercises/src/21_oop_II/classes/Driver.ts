import Car from "./Car";
import { CarType } from "./CarType";

class Driver {
  _firstName: string;
  _lastName: string;
  _age: number;
  _car: Car;
  private _licenseFromYear: number;

  constructor(
    firstName: string,
    lastName: string,
    age: number,
    car: Car,
    licenseFromYear: number
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._age = age;
    this._car = car;
    this._licenseFromYear = licenseFromYear;
  }
  // - get & set

  get licenseFromYear() {
    return this._licenseFromYear;
  }
  // - methods

  getDriverDetails(): string {
    return `${this._firstName} ${this._lastName}, age: ${
      this._age
    }, License since: ${
      this.licenseFromYear
    }, car: ${this._car.getCarDetails()}`;
  }

  getCarType(): string {
    return CarType[this._car._carType];
  }
}

export default Driver;
