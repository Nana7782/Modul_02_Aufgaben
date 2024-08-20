class Song {
  private _title: string = "";
  protected _artist: string = "";
  public _durationSeconds: number = 0;

  constructor(title: string, artist: string) {
    this._title = title;
    this._artist = artist;
  }

  public getInfo(): string {
    return `${this._title} from ${this._artist}, duration: ${this._durationSeconds} seconds`;
  }
}

export default Song;
