// ##### Array-TS-iteration-Level-1_2 map()

const drinks: string[] = [
  "Coca-Cola",
  "Apfelsaft",
  "Pepsi",
  "Traubensaft",
  "Sprite",
  "Orangensaft",
  "Red Bull Energy Drink",
  "Fanta",
];

// const upperDrinks: string[] = drinks.map((drink: string) => {
//   return drink.toUpperCase();
// });
// console.log(upperDrinks);

// const iLikeDrinks: string[] = drinks.map((drink: string) => {
//   return `I like ${drink}`;
// });

// console.log(iLikeDrinks);
// -------------------------------------------- //

function toUpperCaseDrink(drink: string): string {
  return drink.toUpperCase();
}

function likeDrink(drink: string): string {
  return `I like ${drink}`;
}

const upperDrinks = drinks.map(toUpperCaseDrink);
console.log(upperDrinks);

const likeDrinks = drinks.map(likeDrink);
console.log(likeDrinks);

// -------------------------------------------- //

likeDrinks.forEach((like) => console.log(like));

// ##### Array-TS-Iteration-Level-1_4 map()

let fahrenheit: number[] = [0, 32, 45, 50, 75, 80, 99, 120];
console.log(fahrenheit);

function fahrenheitToCelsius(fahrenheit: number): number {
  const result: number = (fahrenheit - 32) / 1.8;
  return Math.floor(result);
}

const celsiusTemp = fahrenheit.map(fahrenheitToCelsius);
console.log(celsiusTemp);

// ##### Array-TS-Iteration-Level-1_5 map()

let checkNumber: number[] = [
  18, 16, 80, 51, 47, 38, 95, 42, 68, 61, 34, 51, 20, 17, 56, 31, 100, 6, 5, 30,
  74, 97, 28, 99, 91, 27, 73, 12, 92, 6, 27, 71, 26, 15, 78,
];

const editedNumber = checkNumber.map((number: number) => {
  if (number % 3 == 0) {
    return number + 100;
  } else {
    return number;
  }
});
console.log(editedNumber);

// without else, the numbers that were not dividable by 3, will show as undefined!

// ##### Array-TS-Iteration-Level-1_6 map() oder forEach()

let album: string[] = [
  "holidays.jpg",
  "Restaurant.jpg",
  "desktop",
  "rooms.GIF",
  "DOGATBEACH.jpg",
];

const albumSorted = album.map((image: string) => {
  if (image.includes(".")) {
    return image.split(".")[0].toLowerCase();
  } else return "invalid";
});
console.log(albumSorted);

// ##### Array-TS-Iteration-Level-1_7 map()

let fruits: string[] = ["🍇", "🍌", "🍒", "🍎"];

const juicedFruits: string[] = fruits.map((fruit: string) => {
  return fruit + "🥛";
});

console.log(juicedFruits);

// -------------------------FILTER---------------------------- //

// ##### Array-TS-Iteration-Level-1_8 filter()

const zahlen: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function printEvenNumbers() {
  const evenNumbers = zahlen.filter((zahl: number) => {
    if (zahl % 2 === 0) {
      return zahl;
    }
  });
  console.log(evenNumbers);
}

printEvenNumbers();

const evenNumbers = zahlen.filter((zahl: number) => zahl % 2 === 0);
console.log(evenNumbers);

const oddNumbers = zahlen.filter((zahl: number) => zahl % 2 === 1);
console.log(oddNumbers);

// ##### Array-filter-TS-Level-1_2 filter()

const heroArr: (string | null | undefined)[] = [
  "Superman",
  "Batman",
  undefined,
  undefined,
  "Wonder Woman",
  "Spider-Man",
  "Black Widow",
  "Iron Man",
  "Thor",
  "Catwoman",
  undefined,
  null,
];
console.log(heroArr);

function showHeroesCleaned(heroList: (string | null | undefined)[]) {
  return heroList.filter(
    (hero: string | null | undefined) => hero !== null && hero !== undefined
  );
}

const heroesCleaned: string[] = showHeroesCleaned(heroArr);
console.log(heroesCleaned);

// ##### Ternary-Operator-TS-Level-2_1

const woerter: string[] = [
  "Banane",
  "Kaktus",
  "Flausch",
  "Ente",
  "Apfel",
  "Auto",
  "Giraffe",
  "Schmetterling",
  "Krokodil",
  "Lampe",
];

function lessThanSixOrSix(wordList: string[]): string[] {
  return wordList.filter((word: string) => word.length <= 6);
}
console.log(lessThanSixOrSix(woerter));

function wordsWithE(wordList: string[]): string[] {
  return wordList.filter(
    (word: string) => word.includes("e") || word.includes("E")
  );
}
console.log(wordsWithE(woerter));
