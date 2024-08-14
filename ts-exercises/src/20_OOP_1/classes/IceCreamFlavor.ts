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
}

export default IceCreamFlavor;
