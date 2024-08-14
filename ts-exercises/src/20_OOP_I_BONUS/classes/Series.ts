import Episode from "./Episode";

class Series {
  _title: string;
  _description: string;
  _startYear: number;
  _episodes: Episode[];
  _endYear?: number;

  constructor(
    title: string,
    description: string,
    startYear: number,
    episodes: Episode[],
    endYear?: number
  ) {
    this._title = title;
    this._description = description;
    this._startYear = startYear;
    this._endYear = endYear;
    this._episodes = episodes;
  }
}

export default Series;
