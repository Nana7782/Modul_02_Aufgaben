// ##### Objekte-TS-Level-1_3
console.log("%c Objekte-Level-1_3 ", "background: white; color: green");

type Apple = {
  color: string;
  size: string;
  isSweet: boolean;
};

let redApple: Apple = { color: "red", size: "big", isSweet: true };
let greenApple: Apple = { color: "green", size: "small", isSweet: false };
let yellowApple: Apple = { color: "yellow", size: "big", isSweet: false };
let apples: Apple[] = [redApple, greenApple, yellowApple];

apples.forEach((size) => {
  console.log(size.size);
});

apples.forEach((color) => {
  console.log(color.color);
});

console.log(apples.length);

let pinkApple: Apple = { color: "pink", size: "big", isSweet: true };
apples.push(pinkApple);
console.log(apples);

// ##### Objekte-TS-Level-1_4
console.log("%c Objekte-Level-1_4 ", "background: white; color: green");

type Pet = {
  tiertyp: string;
  namen: string[];
};

let unsereHaustiere: Pet[] = [
  {
    tiertyp: "Katze",
    namen: ["Gipsy", "Nala", "Dinky"],
  },
  {
    tiertyp: "Hunde",
    namen: ["Knöpfchen", "Pinselchen", "Droopy"],
  },
];

console.log(unsereHaustiere[0].namen[1]);
console.log(unsereHaustiere[1].namen[2]);

const hundeNamen = unsereHaustiere[1].namen;
console.log(hundeNamen);

unsereHaustiere[1].namen[2] = "Snoopy";
unsereHaustiere[0].namen[2] = "Pinky";

console.log(unsereHaustiere[1].namen);
console.log(unsereHaustiere[0].namen);

const neuesHaustier: Pet = {
  tiertyp: "Hamster",
  namen: ["Hamilton", "Stargazer", "Fluffy"],
};

unsereHaustiere.push(neuesHaustier);
console.log(unsereHaustiere);

// ##### Objekte-TS-Level-1_5
console.log("%c Objekte-Level-1_5 ", "background: white; color: green");

type Lager = {
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

let unserLager: Lager = {
  schreibtisch: {
    schublade: "Hefter",
  },
  schrank: {
    "Obere Schublade": {
      Ordner1: "Dokumente",
      Ordner2: "Geheimnisse",
    },
    "Untere Schublade": "Cola",
  },
};

console.log(unserLager.schrank["Obere Schublade"].Ordner2);
console.log(unserLager.schrank["Untere Schublade"]);
console.log(unserLager.schreibtisch.schublade);

// ##### Objekte-TS-Level-1_6
console.log("%c Objekte-Level-1_6 ", "background: white; color: green");

type Musik = {
  kunstler: string;
  title: string;
  release_jahr: number;
  formate: string[];
  gold: boolean;
};

let meineTopVier: Musik[] = [
  {
    kunstler: "The Beatles",
    title: "Abbey Road",
    release_jahr: 1969,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
  {
    kunstler: "Pink Floyd",
    title: "Dark Side of the Moon",
    release_jahr: 1978,
    formate: ["CS", "CD", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Led Zeppelin",
    title: "Led Zeppelin IV",
    release_jahr: 1971,
    formate: ["CS", "LP", "Download"],
    gold: true,
  },
  {
    kunstler: "Metallica",
    title: "Kill ’Em All und Ride the Lightning",
    release_jahr: 1983,
    formate: ["LP", "CD", "MC", "Download"],
    gold: true,
  },
];

console.log(meineTopVier[0].kunstler);
console.log(meineTopVier[1].formate[3]);
console.log(meineTopVier[1].gold);
console.log(meineTopVier[2].release_jahr);
console.log(meineTopVier[3].release_jahr);
console.log(meineTopVier[3].formate[2]);
console.log(meineTopVier[3].title.split(" ")[4]);

let neuesLied: Musik = {
  kunstler: "Covenant",
  title: "Call the Ships to Port",
  release_jahr: 1998,
  formate: ["LP", "CD", "Download"],
  gold: true,
};

meineTopVier.push(neuesLied);

console.log(meineTopVier);

// ##### Objekte-TS-Level-2_2
console.log("%c Objekte-Level-2_2 ", "background: white; color: green");

type PeriodActive = {
  start: number;
  end: number | string;
  extra?: number;
};

type Singer = {
  name: string;
  country: string;
  period_active: PeriodActive;
  genre: string;
};

const singers: Singer[] = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

singers.sort((nameA, nameB) => {
  return nameA.name.localeCompare(nameB.name);
});

console.log(singers);

singers.sort((startA, startB) => {
  return startA.period_active.start - startB.period_active.start;
});

console.log(singers);

// ? Das zweite sort überschreibt das Ergebnis des ersten!? - Hat aber funktioniert ;)
