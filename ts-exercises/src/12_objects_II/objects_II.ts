// **** enum, set, map tuple *****

// ##### Tuple-TS-Level-1_1
console.log("%c Tuple-Level-1_1 ", "background: white; color: green");

type StarWarsActor = [string, string];
const starWarsActor: StarWarsActor = ["Luke Skywalker", "Mark Hamill"];

const starWarsActors: StarWarsActor[] = [
  ["Luke Skywalker", "Mark Hamill"],
  ["Darth Vader", "James Earl Jones"],
  ["Yoda", "Frank Oz"],
  ["Han Solo", "Harrison Ford"],
  ["Princess Leia", "Carrie Fisher"],
];

for (const [character, actor] of starWarsActors) {
  console.log(`${actor} spielt ${character}`);
}

// ##### Tuple-TS-Level-2_1
console.log("%c Tuple-Level-2_1 ", "background: white; color: green");

type MitarbeiterVerwaltung = [
  nummer: number,
  name: string,
  abteilung: string,
  jahresgehalt: number
];

const mitarbeiter: MitarbeiterVerwaltung[] = [
  [1437, "Sahra Desert", "HR", 45370],
  [1439, "Sam Simonis", "Einkauf", 38572],
  [15201, "Constantin Schweiger", "Einkauf", 43573],
  [1385, "Jessica Parker", "Marketing", 63498],
  [1000, "Ben Benson", "Geschäftsführung", 162438],
];

console.log(mitarbeiter);

// ##### Enum-TS-Level-1_1
console.log("%c Enum-Level-1_1 ", "background: white; color: green");

enum Weekday {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}
console.log(Weekday);

enum Month {
  January = "January",
  February = "February",
  March = "March",
  April = "April",
  May = "May",
  June = "June",
  July = "July",
  August = "August",
  September = "September",
  October = "October",
  November = "November",
  December = "December",
}

console.log(Month);

// ? for in Schleife hab ich nicht hinbekommen

// ##### Enum-TS-Level-1_2
console.log("%c Enum-Level-1_2 ", "background: white; color: green");

enum PizzaSize {
  Small,
  Medium,
  Large,
  Familie,
}

enum PizzaIngredients {
  Cheese,
  Onion,
  Salami,
  Spinach,
  Jalapenos,
}

type Pizza = { size: PizzaSize; ingredients: PizzaIngredients };

const pizza1: Pizza = {
  size: PizzaSize.Familie,
  ingredients: PizzaIngredients.Spinach,
};

const pizza2: Pizza = {
  size: PizzaSize.Small,
  ingredients: PizzaIngredients.Cheese,
};

const pizza3: Pizza = {
  size: PizzaSize.Large,
  ingredients: PizzaIngredients.Jalapenos,
};

const pizza4: Pizza = {
  size: PizzaSize.Medium,
  ingredients: PizzaIngredients.Onion,
};

// ##### Enum-TS-Level-2_1
console.log("%c Enum-Level-2_1 ", "background: white; color: green");

enum HtmlError {
  OK = 200,
  Redirect = 300,
  BadRequest = 400,
  InternalServerError = 500,
}

function showHTMLError() {
  const randomValue = Math.floor(Math.random() * 6);
  let error: HtmlError;

  switch (randomValue) {
    case 0:
    case 1:
    case 2:
      error = HtmlError.OK;
      console.log(error, HtmlError[error]);
      break;
    case 3:
      error = HtmlError.Redirect;
      console.log(error, HtmlError[error]);
      break;
    case 4:
      error = HtmlError.BadRequest;
      console.log(error, HtmlError[error]);
      break;
    case 5:
      error = HtmlError.InternalServerError;
      console.log(error, HtmlError[error]);
      break;
    default:
      console.log("Unbekannter Fehler");
  }
}

showHTMLError();

// ##### Enum-TS-Level-2_2
console.log("%c Enum-Level-2_2 ", "background: white; color: green");

enum ClothingColor {
  Yellow = "#FFFF00",
  Orange = "#FFA500",
  Pink = "#FFC0CB",
  Blue = "#0000FF",
  Purple = "#800080",
  Gray = "#808080",
}

const allColors: ClothingColor[] = [
  ClothingColor.Yellow,
  ClothingColor.Orange,
  ClothingColor.Pink,
  ClothingColor.Blue,
  ClothingColor.Purple,
  ClothingColor.Gray,
];

function createColorButtons() {
  const container = document.createElement("div");

  allColors.forEach((color) => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.innerText = color;
    container.appendChild(button);
  });
  document.body.appendChild(container);
}
createColorButtons();

// ? funktioniert nicht ganz so wie ich will

// ##### Set-TS-Level-1_1
console.log("%c Set-Level-1_1 ", "background: white; color: green");

const starWarsCharacters = new Set<string>([
  "Luke Skywalker",
  "Darth Vader",
  "Obi Wan Kenobi",
]);

console.log(starWarsCharacters);

starWarsCharacters.add("Leia Organa");
console.log(starWarsCharacters);

starWarsCharacters.add("Leia Organa");
console.log(starWarsCharacters);

// ##### Map-TS-Level-1_1
console.log("%c Map-Level-1_1 ", "background: white; color: green");

const favoriteBands = new Map<string, string[]>();

favoriteBands.set("The Beatles", [
  "John Lennon",
  "Paul McCartney",
  "George Harrison",
  "Ringo Starr",
]);
favoriteBands.set("Queen", [
  "Freddie Mercury",
  "Brian May",
  "Roger Taylor",
  "John Deacon",
]);
favoriteBands.set("Kiss", [
  "Gene Simmons",
  "Paul Stanley",
  "Ace Frehley",
  "Peter Criss",
]);
favoriteBands.set("NWA", ["Ice Cube", "Dr. Dre", "Eazy-E", "MC Ren"]);
favoriteBands.set("Kraftwerk", [
  "Ralf Hütter",
  "Florian Schneider",
  "Karl Bartos",
  "Wolfgang Flür",
]);
favoriteBands.set("Pink Floyd", [
  "Roger Waters",
  "David Gilmour",
  "Nick Mason",
  "Richard Wright",
]);
favoriteBands.set("Metallica", [
  "James Hetfield",
  "Lars Ulrich",
  "Kirk Hammett",
  "Robert Trujillo",
]);
favoriteBands.set("The Rolling Stones", [
  "Mick Jagger",
  "Keith Richards",
  "Charlie Watts",
  "Ronnie Wood",
]);
favoriteBands.set("U2", [
  "Bono",
  "The Edge",
  "Adam Clayton",
  "Larry Mullen Jr.",
]);

console.log(favoriteBands.size);

favoriteBands.set("New Model Army", [
  "Justin Sullivan",
  "Ceri Monger",
  "Dean White",
  "Michael Dean",
  "Ed Alleyne-Johnson",
]);

console.log(favoriteBands.size);

console.log(favoriteBands.has("Kraftwerk"));

console.log(favoriteBands.get("Kraftwerk"));

console.log(favoriteBands.get("Kraftwerk"[3]));

const NewModelArmyArray: any = favoriteBands.get("New Model Army");
console.log(NewModelArmyArray[4]);
