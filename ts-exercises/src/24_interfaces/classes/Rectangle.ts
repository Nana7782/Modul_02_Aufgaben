import IShape from "../contracts/IShape";

class Rectangle implements IShape {
  _name: string;
  _color: string;
  _width: number;
  _height: number;
  _isRound: boolean;

  constructor(name: string, color: string, width: number, height: number) {
    this._name = name;
    this._color = color;
    this._width = width;
    this._height = height;
    this._isRound = false;
  }
  draw(): void {
    console.log("Drawing rectangle");
  }
}
