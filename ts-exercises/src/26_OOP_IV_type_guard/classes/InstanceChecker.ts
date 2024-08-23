import Car from "./Car";
import ElectricCar from "./ElectricCar";
import Unicorn from "./Unicorn";

class InstanceChecker {
  static isUnicorn(objectToCheck: any): boolean {
    return objectToCheck instanceof Unicorn;
  }
  static isCar(objectToCheck: any): boolean {
    return objectToCheck instanceof Car;
  }

  static isElectricCar(objectToCheck: any): boolean {
    return objectToCheck instanceof ElectricCar;
  }
}

export default InstanceChecker;
