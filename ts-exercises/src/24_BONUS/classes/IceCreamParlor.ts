import IIceCream from "../interfaces/IIceCream";

class IceCreamParlor implements IIceCream {
  private _flavors: { [key: string]: number } = {};
  private _defaultPrice: number = 2.5;

  constructor(initialFlavors: string[]) {
    initialFlavors.forEach((flavor) => {
      this._flavors[flavor] = this._defaultPrice;
    });
  }

  listFlavors(): string[] {
    return Object.keys(this._flavors);
  }

  orderIceCream(flavor: string, scoops: number): string {
    if (!this.isFlavorAvailable(flavor)) {
      return `The flavor "${flavor}" is not available.`;
    }
    if (scoops <= 0) {
      return "Number of scoops must be larger than 0.";
    }
    const totalPrice = this.getFlavorPrice(flavor) * scoops;
    return `Order: ${scoops} scoop/s ${flavor} for ${totalPrice.toFixed(
      2
    )} Euros.`;
  }

  addNewFlavor(flavor: string): void {
    if (!this._flavors[flavor]) {
      this._flavors[flavor] = this._defaultPrice;
    }
  }

  removeFlavor(flavor: string): void {
    delete this._flavors[flavor];
  }

  isFlavorAvailable(flavor: string): boolean {
    return !!this._flavors[flavor];
  }

  getFlavorPrice(flavor: string): number {
    return this._flavors[flavor] || 0;
  }
}

export default IceCreamParlor;
