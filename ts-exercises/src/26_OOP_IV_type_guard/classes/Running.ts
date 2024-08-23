import Activity from "./Activity";

class Running extends Activity {
  _distance: number;
  constructor(name: string, difficulty: number, distance: number) {
    super(name, difficulty);
    this._distance = distance;
  }

  private calculateTime(distance: number): number {
    if (distance >= 10) {
      return 5;
    } else if (distance >= 7) {
      return 4;
    } else if (distance >= 4.5) {
      return 3;
    } else if (distance >= 3) {
      return 2;
    } else {
      return 0;
    }
  }
  warmUp(): void {
    const time = this.calculateTime(this._distance);
    console.log(`Warming up for ${time} minutes.`);
  }

  coolDown(): void {
    const time = this.calculateTime(this._distance);
    console.log(`Cooling down for ${time} minutes.`);
  }

  execute(): void {
    console.log(
      `Executing ${this.name} running activity for ${this._distance} km...`
    );
  }
}

export default Running;
