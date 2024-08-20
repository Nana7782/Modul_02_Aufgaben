class Alien {
  public _name: string = "";
  public _planet: string = "";
  public _galaxy: string = "";
  private _color: string = "";

  constructor(name: string, color: string) {
    this._name = name;
    this._color = color;
  }

  get color() {
    return this._color;
  }
  set color(value: string) {
    this._color = value;
  }

  get planet() {
    return this._planet;
  }
  set planet(value: string) {
    this._planet = value;
  }

  get galaxy() {
    return this._galaxy;
  }
  set galaxy(value: string) {
    this._galaxy = value;
  }
}

export default Alien;
