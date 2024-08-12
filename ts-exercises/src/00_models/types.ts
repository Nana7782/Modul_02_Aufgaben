export type Apple = {
  color: string;
  size: string;
  isSweet: boolean;
};

export type Pet = {
  tiertyp: string;
  namen: string[];
};

export type Musik = {
  kunstler: string;
  title: string;
  release_jahr: number;
  formate: string[];
  gold: boolean;
};

export type Lager = {
  schreibtisch: {
    schublade: string;
  };
  schrank: {
    "Obere Schublade": {
      Ordner1: string;
      Ordner2: string;
    };
    "Untere Schublade": string;
  };
};

type PeriodActive = {
  start: number;
  end: number | string;
  extra?: number;
};

export type Singer = {
  name: string;
  country: string;
  period_active: PeriodActive;
  genre: string;
};

export type PeriodActiveTwo = {
  start: number;
  end: number | string;
  extra?: number;
};

export type SingerTwo = {
  name: string;
  country: string;
  period_active: PeriodActiveTwo;
  genre: string;
};

export type StarWarsActor = [string, string];

export type MitarbeiterVerwaltung = [
  nummer: number,
  name: string,
  abteilung: string,
  jahresgehalt: number
];

export type SimplePerson = {
  vorname: string;
  nachname: string;
  land: string;
};

export type ObjectWithFN = {
  name: string;
  nachname: string;
  alter: number;
  showInfo: () => void;
};

export type NewCustomer = {
  firstName: string;
  lastName: string;
  email?: string;
  phone?: string;
};

export type Monster = {
  name: string;
  type: string;
  health: number;
  strength: number;
  speed: number;
};
