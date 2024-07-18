console.log("Welcome :)");

// # Intro-TS-Level-1_12

let dogName = "Leon";
console.log(dogName);

dogName = "elf";

let tired = true;
let energy = 0;
let wishes = "sleep";

// tired = 100
// energy = "coffee"
// wishes = false

// let seventeen;
let seventeen = 17;
const sum = seventeen + 44;
console.log(sum);

// # Intro-TS-Level-1_13

// Addition
let addition_operator: number = 1 + 1;
console.log("addition: " + addition_operator);

// Subtraktion
let subtraktion_operator: number = 2 - 1;
console.log("subtraktion: " + subtraktion_operator);

// Multiplikation
let multiplication_operator: number = 2 * 2;
console.log("multiplication: " + multiplication_operator);

// Division
let division_operator: number = 4 / 2;
console.log("division: " + division_operator);

// Modulo: zeigt an, was der Rest sein würde.
let modulo_operator: number = 14 % 5;
console.log("modulus: " + modulo_operator);

// # Intro-TS-Level-1_8

let x: number = 20;
let y: number = 30;

let addition_op: number = x + y;
console.log("addition x + y = " + addition_op);

let subtraktion_op: number = y - x;
console.log("subtrakt y - x = " + subtraktion_op);

let multiply_op: number = x * y;
console.log("multiply x * y = " + multiply_op);

let division_op: number = x / y;
console.log("divide x / y = " + division_op);

let z: number = 10;

let resultOne: number = (x * y) / z;
console.log(resultOne);

let a: number = 15;
let b: number = 9;

let remainder: number = a % b;
console.log(remainder);

let c: number = 20;
let resultTwo: number = (a + b) * c;
console.log(resultTwo);

a++;
console.log(a++);

b--;
console.log(b--);

let resultThree: number = a - b;
console.log(resultThree);

console.log(resultOne % resultTwo);

// # Intro-TS-Level-1_16

let score: number = 5 + 5 * 10;
console.log("Ergebnis: " + score);

score = (5 + 5) * 10;
console.log("Ergebnis: " + score);

score = 0;
score = score + 10;
console.log("Ergebnis: " + score);

score += 10;
console.log("Ergebnis: " + score);

let zahl = 1;
zahl = zahl + 1;
zahl += 1;

zahl++;
console.log("increment: " + zahl);

zahl--;
console.log("dekrement: " + zahl);
