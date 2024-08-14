import Actor from "./Actor";

class Episode {
  _title: string;
  _length: number;
  _description: string;
  _actors: Actor[];

  constructor(
    title: string,
    length: number,
    descripton: string,
    actors: Actor[]
  ) {
    this._title = title;
    this._length = length;
    this._description = descripton;
    this._actors = actors;
  }
}

export default Episode;
