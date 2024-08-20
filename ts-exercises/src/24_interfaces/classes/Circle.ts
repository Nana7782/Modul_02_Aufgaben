import IShape from "../contracts/IShape";

class Circle implements IShape {
  _name: string;
  _color: string;
  _radius: number;
  _isRound: boolean;

  constructor(color: string, radius: number) {
    this._name = "circle";
    this._color = color;
    this._radius = radius;
    this._isRound = true;
  }

  public draw(): void {
    console.log("Drawing circle");
  }
}

export default Circle;
