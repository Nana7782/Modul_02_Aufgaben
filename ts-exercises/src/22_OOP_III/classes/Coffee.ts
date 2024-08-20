import Beverage from "./Beverage";

export enum CoffeeType {
  Espresso = "Espresso",
  Latte = "Latte",
  Cappuccino = "Cappuccino",
  Americano = "Americano",
}

export class Coffee extends Beverage {
  _type: CoffeeType;

  constructor(name: string, price: number, type: CoffeeType) {
    super(name, price);
    this._type = type;
  }
}
