// # Conditionals-Level-2_1

const johnHeight: number = 170;
const johnAge: number = 22;

let johnScore: number = johnAge * 5 + johnHeight;
console.log({ johnScore });

const meikeHeight: number = 168;
const meikeAge: number = 34;

let meikeScore: number = meikeAge * 5 + meikeHeight;
console.log({ meikeScore });

if (johnScore > meikeScore) {
  console.log("John gewinnt mit " + johnScore + " Punkten!");
} else if (meikeScore > johnScore) {
  console.log("Meike gewinnt mit " + meikeScore + " Punkten!");
} else {
  console.log("Unentschieden! Beide haben " + johnScore + " Punkte.");
}

// #  Conditionals-TS-Level-2_3

// # Conditionals-TS-Level-2_4

let x: number = Math.floor(Math.random() * 77) + 1;
let y: number = Math.floor(Math.random() * 77) + 1;
console.log({ x });
console.log({ y });

if (x === y) {
  console.log("What a coincidence");
} else if (x > y) {
  console.log("First number is higher");
} else {
  console.log("Second number is higher");
}

switch (true) {
  case x === y:
    console.log("What a coincidence");
    break;
  case x > y:
    console.log("First number is higher");
    break;
  default:
    console.log("Second number is higher");
}

// # Conditionals-TS-Level-1_5

// let weekdayAsNumber: number = Number(
//   window.prompt("Please insert a number from 1 to 7")
// );

// let weekdayAsString: string = "";

// switch (weekdayAsNumber) {
//   case 1:
//     weekdayAsString = "Monday";
//     break;
//   case 2:
//     weekdayAsString = "Tuesday";
//     break;
//   case 3:
//     weekdayAsString = "Wednesday";
//     break;
//   case 4:
//     weekdayAsString = "Thursday";
//     break;
//   case 5:
//     weekdayAsString = "Friday";
//     break;
//   case 6:
//     weekdayAsString = "Saturday";
//     break;
//   case 7:
//     weekdayAsString = "Sunday";
//     break;
//   default:
//     console.error("Weekday must be between 1 and 7");
//     break;
// }

// if (weekdayAsString) {
//   console.log(weekdayAsString);
// }

// ? Habe keine Möglichkeit gefunden, die weekdayAsString Variable mit in den switch-teil zu packen, das löste immer Fehler aus. Ob das jetzt so "hübsch" ist, weiß ich nicht, bin nach viel googeln auf diesen Weg gekommen und es war der Einzige der funktioniert hat^^

// #  Conditionals-TS-Level-2_8

let schoolGrade: number = Math.floor(Math.random() * 10) + 1;
console.log({ schoolGrade });

switch (schoolGrade) {
  case 1:
    console.log("sehr gut");
    break;
  case 2:
    console.log("gut");
    break;
  case 3:
    console.log("befriedigend");
    break;
  case 4:
    console.log("ausreichend");
    break;
  case 5:
    console.log("mangelhaft");
    break;
  case 6:
    console.log("ungenügend");
    break;
  default:
    console.log("Das ist keine gültige Schulnote");
}

// #  Conditionals-TS-Level-3_1

let salesMonth: number = Math.floor(Math.random() * 12) + 1;
console.log({ salesMonth });

switch (true) {
  case salesMonth >= 1 && salesMonth <= 3:
    console.log("1. Quartal");
    break;
  case salesMonth >= 4 && salesMonth <= 6:
    console.log("2. Quartal");
    break;
  case salesMonth >= 7 && salesMonth <= 9:
    console.log("3. Quartal");
    break;
  default:
    console.log("4. Quartal");
    break;
}

//  2. Teil der Aufgabe

let totalSales: number = Math.floor(Math.random() * 10000) + 1001;
console.log({ totalSales });

let salesQuarter: number = Math.floor(Math.random() * 4) + 1;
console.log({ salesQuarter });

let salesClassification: string;

switch (true) {
  case totalSales >= 1000 && totalSales <= 2500:
    salesClassification = "schlecht";
    break;
  case totalSales >= 2501 && totalSales <= 5000:
    salesClassification = "mittelmäßig";
    break;
  case totalSales >= 5001 && totalSales <= 7500:
    salesClassification = "hoch";
    break;
  default:
    salesClassification = "unglaublich";
    break;
}

console.log(
  `Im ${salesQuarter}. Quartal war der Umsatz ${salesClassification}!`
);

// #  Ternary-Operator-TS-Level-2_2

const isOnline: boolean = Math.random() < 0.5;
const isPremiumUser: boolean = Math.random() < 0.5;
const isAdult: boolean = Math.random() < 0.5;

console.log(isOnline ? "online" : "offline");

const monthlyFee: number = isPremiumUser ? 19.99 : 12.99;
console.log({ monthlyFee });

isAdult ? window.confirm("Willkommen") : window.alert("Keine Berechtigung");

const randomAge: number = Math.floor(Math.random() * 120);
const randomSalary: number = Math.floor(Math.random() * 15000);

const isMiddleAged: boolean = randomAge >= 40 && randomAge <= 65 ? true : false;
console.log({ isMiddleAged });

if (randomSalary > 10000) {
  console.log("You are rich");
} else if (randomSalary > 1500) {
  console.log("Not too bad");
} else {
  console.log("Not that much");
}

console.log({ randomAge });
console.log({ randomSalary });

console.clear();
