// -----------------------COPY---------------------------- //

// ###### Array-TS-Level-1_14 - copy()

const oldHollywoodActors: string[] = [
  "Marlon Brando",
  "Audrey Hepburn",
  "Elizabeth Taylor",
  "Cary Grant",
  "Paul Newman",
  "Doris Day",
];
console.log(oldHollywoodActors);

const actorsReference: string[] = [];
actorsReference.unshift("Marilyn Monroe");
console.log(actorsReference);

const copiedOldHollywoodActors: string[] =
  oldHollywoodActors.concat(actorsReference);
console.log(copiedOldHollywoodActors);

const secondCopieOfOldHollywoodActors: string[] = oldHollywoodActors.slice(
  2,
  5
);
console.log(secondCopieOfOldHollywoodActors);

const thirdCopieOfOldHollywoodActors: string[] = [...oldHollywoodActors];
thirdCopieOfOldHollywoodActors.push("Roger Moore");
console.log(thirdCopieOfOldHollywoodActors);

// console.clear();
// -----------------------SORT----------------------------- //

// ###### Array-TS-Sort-Level-1_3 - sort()

let numArray1: number[] = [36, 24, 22, 3, 2, 98, 88, 99, 10, 54, 68, 70];

const sortedNumArray: number[] = numArray1.sort(
  (a: number, b: number) => a - b
);
console.log(sortedNumArray);

const backwardsSortedNumArray: number[] = numArray1.sort(
  (a: number, b: number) => b - a
);
console.log(backwardsSortedNumArray);

console.log(numArray1);

// - sort() despite using a new variable for the sorted numbers, the original array is sorted as well !?

// ###### Array-TS-Sort-Level-2_3 - slice()

const oldPainters: string[] = [
  "Caspar David Friedrich",
  "Mary Cassatt",
  "Rosa Bonheur",
  "Francisco de Goya",
  "Édouard Manet",
];

const newPainters: string[] = [
  "Pablo Picasso",
  "Salvador Dalí",
  "Frida Kahlo",
  "Georgia O'Keeffe",
];
// ---- female Painters ----
const femalePainters1: string[] = oldPainters.slice(1, 3);
// console.log(femalePainters1);
const femalePainters2: string[] = newPainters.slice(2, 4);
// console.log(femalePainters2);

const allFemalePaintersConcat: string[] =
  femalePainters1.concat(femalePainters2);
console.log(allFemalePaintersConcat);

const allFemalePaintersSpred: string[] = [
  ...femalePainters1,
  ...femalePainters2,
];
console.log(allFemalePaintersSpred);

// ---- male Painters ----
const malePainters1: string[] = oldPainters.slice(0, 1);
const malePainters2: string[] = oldPainters.slice(3, 5);
const malePainters3: string[] = newPainters.slice(0, 2);

const allMalePaintersConcat: string[] = malePainters1.concat(
  malePainters2,
  malePainters3
);
console.log(allMalePaintersConcat);

const allMalePaintersSpread: string[] = [
  ...malePainters1,
  ...malePainters2,
  ...malePainters3,
];
console.log(allMalePaintersSpread);

// console.clear();

// -----------------------FIND----------------------------- //

// ###### Array-TS-Level-3_1 - find()

const artworks: string[] = [
  "Die Sternennacht - Vincent van Gogh",
  "Guernica - Pablo Picasso",
  "Die Geburt der Venus - Sandro Botticelli",
  "Die Nachtwache - Rembrandt",
  "Die Mona Lisa - Leonardo da Vinci",
  "Die Kartoffelesser - Vincent van Gogh",
  "Die Schrei - Edvard Munch",
  "Das letzte Abendmahl - Leonardo da Vinci",
  "Die freudige Botschaft - James Tissot",
  "Der Garten der Lüste - Hieronymus Bosch",
];

const artworkDates: string[] = [
  "Die Sternennacht - 1889",
  "Guernica - 1937",
  "Die Geburt der Venus - 1486",
  "Die Nachtwache - 1642",
  "Die Mona Lisa - 1503",
  "Die Kartoffelesser - 1885",
  "Die Schrei - 1893",
  "Das letzte Abendmahl - 1495",
  "Die freudige Botschaft - 1885",
  "Der Garten der Lüste - 1505",
];

function findArtwork(artworkName: string): void {
  const artworkSearch = artworks.find((artwork) =>
    artwork.startsWith(artworkName)
  );
  const artworkDateSearch = artworkDates.find((date) =>
    date.startsWith(artworkName)
  );
  if (artworkSearch === undefined || artworkDateSearch === undefined) {
    console.log(`Artwork '${artworkName}' not found`);
    return;
  }

  const artist = artworkSearch.split("-")[1].trim();
  const year = artworkDateSearch.split("-")[1].trim();

  console.log(`'${artworkName}' wurde von ${artist} im Jahre ${year} gemalt`);
}

findArtwork("Die Sternennacht");
findArtwork("Guernica");
findArtwork("Die Mona Lisa");
findArtwork("Der Schrei");
findArtwork("Pablo Picasso");
