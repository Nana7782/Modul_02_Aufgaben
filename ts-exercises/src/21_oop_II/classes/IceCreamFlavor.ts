class IceCreamFlavor {
  _name: string;
  _price: number;
  _isPopular: boolean;
  _description?: string;

  constructor(
    name: string = "",
    price: number = 0,
    isPopular: boolean = false,
    description?: string
  ) {
    this._name = name;
    this._price = price;
    this._isPopular = isPopular;
    this._description = description;
  }

  getTotalPrice(numberOfScoops: number): number {
    const total = this._price * numberOfScoops;
    console.log(
      `Total price for ${numberOfScoops} scoops of ${
        this._name
      }: ${total.toFixed(2)} Euro`
    );
    return total;
  }

  printInfo(): void {
    const popularity = this._isPopular ? "is popular" : "is not popular";
    console.log(
      `Flavor ${this._name} ${popularity} and costs ${this._price.toFixed(
        2
      )} Euro.`
    );
  }

  getLengthOfDescription(): number {
    return this._description ? this._description.length : 0;
  }
}

export default IceCreamFlavor;
