import Activity from "./Activity";

export enum YogaType {
  Hatha = "Hatha",
  Vinyasa = "Vinyasa",
  Ashtanga = "Ashtanga",
  Bikram = "Bikram",
}
class Yoga extends Activity {
  _type: YogaType;
  constructor(name: string, difficulty: number, type: YogaType) {
    super(name, difficulty);
    this._type = type;
  }
  get type(): YogaType {
    return this._type;
  }

  execute(): void {
    console.log(`Executing ${this.name} yoga class of type ${this._type}...`);
  }
}

export default Yoga;
