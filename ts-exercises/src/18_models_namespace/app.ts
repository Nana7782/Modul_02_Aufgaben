import { addFive } from "./models/calulator";
import { add, divide, multiply, substract } from "./models/operations";
import {
  addNumbers,
  divideNumbers,
  multiplyNumbers,
  substractNumbers,
} from "./models/operations2";

import getRandomColor from "./models/random-color-generator";
import TextTools from "./models/text-tools";

// ##### Module-Namensräume-TS-1_1
console.log("%c Module-Namensräume-TS-1_1 ", "background: white; color: green");

console.log(addFive(5));
console.log(addFive(371));
console.log(addFive(9));

// ##### Module-Namensräume-TS-1_2
console.log("%c Module-Namensräume-TS-1_2 ", "background: white; color: green");

console.log(add(3, 9));
console.log(substract(20, 7));
console.log(multiply(8, 3));
console.log(divide(42, 7));

console.log(addNumbers(3, 9));
console.log(substractNumbers(20, 7));
console.log(multiplyNumbers(8, 3));
console.log(divideNumbers(42, 7));

// ##### Module-Namensräume-TS-1_3
console.log("%c Module-Namensräume-TS-1_3 ", "background: white; color: green");

const color = getRandomColor();
console.log(`Zufällige Farbe: ${color}`);

// ##### Module-Namensräume-TS-2_1
console.log("%c Module-Namensräume-TS-2_1 ", "background: white; color: green");

const beispielText = "Nana ist heute wieder sehr müde";
const upperText = TextTools.toUpperCase(beispielText);
const reversedText = TextTools.reverse(beispielText);

console.log({ beispielText });
console.log({ upperText });
console.log({ reversedText });
console.log(TextTools.constantText);
