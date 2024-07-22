// # Math-TS-Level-1_1   -------- Math.PI() & rounded()

const piValue: number = Math.PI;
console.log({ piValue });

const roundedPi: string = piValue.toFixed(2);
console.log({ roundedPi });

// # Math-TS-Level-1_2  -------Math.round()

let randomNumbers: number[] = [3.14, 193.4464, 0.8596433607, -2.940629089];
let firstNum: number = randomNumbers[0];
let secondNum: number = randomNumbers[1];
let thirdNum: number = randomNumbers[2];
let fourthNum: number = randomNumbers[3];

console.log(Math.round(firstNum));
console.log(Math.round(secondNum));
console.log(Math.round(thirdNum));
console.log(Math.round(fourthNum));

// # Math-TS-Level-1_3  ------- Math.random() & Math.round()

let randomNum: number = Math.random();
console.log(randomNum);

let randomNum1_10: number = Math.floor(Math.random() * 10);
console.log(randomNum1_10);

let randomNum1_100: number = Math.floor(Math.random() * 100);
console.log(randomNum1_100);

// # Math-TS-Level-2_2  ------- Math.random()

// const randomNumberQuiz = window.prompt("Guess a number between 1 and 10");

// let randomNumberGuess: number = Math.floor(Math.random() * 10) + 1;

// switch (randomNumberQuiz) {
//   case randomNumberGuess.toString():
//     console.log("You win!");
//     break;
//   default:
//     console.log("You loose! The number was " + randomNumberGuess);
//     break;
// }

console.clear();
