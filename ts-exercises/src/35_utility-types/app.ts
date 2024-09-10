import {
  IBooks,
  IPartialBooks,
  IBasicBooks,
  IBookDescriptions,
  IRequiredBooks,
  IReadOnlyBooks,
} from "./interfaces/IBooks";
import { IDonkeys } from "./interfaces/IDonkeys";

// ##### Utility-Types-TS-Level-1_1
console.log(
  "%c Utility-Types-TS-Level-1_1 ",
  "background: white; color: green"
);

type PartialBooks = Partial<IBooks>;

const partialBook: PartialBooks = {
  author: "Stephen King",
  name: "The Stand",
};

const partialBook2: IPartialBooks = {
  name: "Stehpehn King",
};

// ##### Utility-Types-TS-Level-1_2
console.log(
  "%c Utility-Types-TS-Level-1_2 ",
  "background: white; color: green"
);

type BasicBook = Omit<IBooks, "publishingYear" | "shortDescription">;

const basicBook: BasicBook = {
  author: "Stephen King",
  name: "The Shining",
  numberOfPages: 672,
};

const basicBook2: IBasicBooks = {
  author: "Stephen King",
  name: "Needful Things",
  numberOfPages: 690,
};

// ##### Utility-Types-TS-Level-1_3
console.log(
  "%c Utility-Types-TS-Level-1_3 ",
  "background: white; color: green"
);

type BookDescription = Pick<IBooks, "name" | "shortDescription">;

const bookDescription: BookDescription = {
  name: "It",
  shortDescription:
    "The story follows the experiences of seven children as they are terrorized by an evil entity that exploits the fears of its victims to disguise itself while hunting its prey.",
};

const bookDescription2: IBookDescriptions = {
  name: "Misery",
  shortDescription:
    "...is a gripping psychological thriller that delves into the twisted mind of a former nurse who holds her favorite author captive",
};

// ##### Utility-Types-TS-Level-1_4
console.log(
  "%c Utility-Types-TS-Level-1_4 ",
  "background: white; color: green"
);

type RequiredBooks = Required<IBooks>;

const requiredBook: BookDescription = {
  name: "The Institute",
  shortDescription:
    "The book follows twelve-year-old genius Luke Ellis. When his parents are murdered, he is kidnapped by intruders and awakens in the Institute, a facility that houses other abducted children who have telepathy or telekinesis.",
};

const requiredBook2: IRequiredBooks = {
  name: "Wizard and Glass",
  shortDescription:
    "Roland, Eddie, Susannah, Jake, and Jake's pet bumbler survive Blaine the Mono's final crash, only to find themselves stranded in an alternate version of Topeka, Kansas, one that has been ravaged by the superflu virus.",
  author: "Stephen King",
  publishingYear: "1997",
  numberOfPages: 787,
};

// ##### Utility-Types-TS-Level-1_5
console.log(
  "%c Utility-Types-TS-Level-1_5 ",
  "background: white; color: green"
);

type ReadOnlyBooks = Readonly<IBooks>;

const readonlyBook: ReadOnlyBooks = {
  name: "Carrie",
  author: "Stephen King",
  shortDescription:
    "Carrie White, an unpopular friendless misfit and bullied high school girl who uses her newly discovered telekinetic powers to exact revenge on those who torment her.",
  publishingYear: "1974",
  numberOfPages: 304,
};

// readonlyBook.shortDescription= "There is a lot ob blood"

const readonlyBook2: IReadOnlyBooks = {
  name: "Cujo",
  author: "Stephen King",
  shortDescription:
    "Cujo is a two-hundred-pound Saint Bernard, the beloved family pet of the Joe Cambers of Castle Rock, Maine, and the best friend ten-year-old Brett Camber has ever had. One day Cujo pursues a rabbit into a bolt-hole--a cave inhabited by some very sick bats.",
  publishingYear: "1981",
  numberOfPages: 432,
};

// readonlyBook2.author = "King Stephen"

// ##### Utility-Types-TS-Level-1_6
console.log(
  "%c Utility-Types-TS-Level-1_6 ",
  "background: white; color: green"
);

type BasicColors = "RED" | "BLUE" | "GREEN" | "YELLOW" | "BLACK" | "WHITE";

type RealColors = Exclude<BasicColors, "RED" | "BLUE" | "GREEN" | "YELLOW">;

function showColor(color: RealColors): void {
  console.log(color);
}

showColor("BLACK");
showColor("WHITE");

// ##### Utility-Types-TS-Level-1_7
console.log(
  "%c Utility-Types-TS-Level-1_7 ",
  "background: white; color: green"
);

enum Donkey {
  Daisy = "Daisy",
  Gus = "Gus",
  Rosie = "Rosie",
  Coco = "Coco",
  Jasper = "Jasper",
}

const donkeyRecord: Record<Donkey, IDonkeys> = {
  [Donkey.Daisy]: {
    name: Donkey.Daisy,
    age: 7,
    fluffyness: 4,
    favoriteFood: "broccoli",
  },
  [Donkey.Gus]: {
    name: Donkey.Gus,
    age: 2,
    fluffyness: 6,
    favoriteFood: "cucumber",
  },
  [Donkey.Rosie]: {
    name: Donkey.Rosie,
    age: 1,
    fluffyness: 4,
    favoriteFood: "apples",
  },
  [Donkey.Coco]: {
    name: Donkey.Coco,
    age: 8,
    fluffyness: 5,
    favoriteFood: "tomatoes",
  },
  [Donkey.Jasper]: {
    name: Donkey.Jasper,
    age: 9,
    fluffyness: 5,
    favoriteFood: "kiwis",
  },
};

console.log(donkeyRecord);
console.log(donkeyRecord.Coco);
