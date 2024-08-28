// ##### callback-TS-Level-1_1
console.log("%c callback-TS-Level-1_1 ", "background: white; color: green");

function addNumbers(
  a: number,
  b: number,
  callback: (sum: number) => void
): void {
  const sum = a + b;
  callback(sum);
}

const logSum = (sum: number) => {
  console.log(`Sum is: ${sum}`);
};

addNumbers(5, 10, logSum);

// ##### callback-TS-Level-1_2
console.log("%c callback-TS-Level-1_2 ", "background: white; color: green");

function showAlert(sum: number): void {
  alert(`Sum is: ${sum}`);
}

// addNumbers(7, 12, showAlert);

// ##### callback-TS-Level-1_4
console.log("%c callback-TS-Level-1_4 ", "background: white; color: green");

function showMaximum(
  numbers: number[],
  callback: (max: number) => number
): void {
  const max = Math.max(...numbers);
  console.log(`Max is: ${max}`);

  const result = callback(max);
  console.log(`The result of the callback function is: ${result}`);
  console.log("Finished with shoxMaximum");
}

function powerOfTen(number: number): number {
  return Math.pow(number, 10);
}
const numArray: number[] = [3, 5, 8, 9, 10, 5, 7, 9, 19];
showMaximum(numArray, powerOfTen);

// ##### callback-TS-Level-2_1
console.log("%c callback-TS-Level-2_1 ", "background: white; color: green");

function calculateSumAndMore(
  a: number,
  b: number,
  callback1: (result1: number) => number,
  callback2: (result2: number) => string
): string {
  const sum = a + b;
  const result1 = callback1(sum);
  const result2 = callback2(result1);
  return result2;
}

const doubleSum = (result1: number): number => {
  return result1 * 2;
};

const toBinary = (result2: number): string => {
  return result2.toString(2);
};

const numbers = [
  { a: 5, b: 10 },
  { a: 3, b: 7 },
  { a: 12, b: 8 },
];

numbers.forEach(({ a, b }) => {
  const result = calculateSumAndMore(a, b, doubleSum, toBinary);
  console.log(`The Binary of (2 * (${a} + ${b})) is: ${result}`);
});

// ##### callback-TS-Level-3_2
console.log("%c callback-TS-Level-3_2 ", "background: white; color: green");

function randomNumber(): string {
  const randomNum = Math.floor(Math.random() * 100);
  return randomNum.toString();
}

function randomText(): string {
  const texts = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm on a seafood diet. I see food and I eat it!",
    "Why don’t skeletons fight each other? They don’t have the guts!",
    "I told my computer I needed a break, and now it won’t stop sending me beach wallpapers.",
    "Parallel lines have so much in common. It’s a shame they’ll never meet!",
    "I would tell you a joke about an elevator, but it’s an uplifting experience!",
    "Why do cows have hooves instead of feet? Because they lactose!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call fake spaghetti? An impasta!",
    "I used to play piano by ear, but now I use my hands!",
  ];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

function randomBoolean(): string {
  const randomBool = Math.random() < 0.5;
  return randomBool.toString();
}

function randomEmoji(): string {
  const emojis = ["🖤", "👻", "🧟‍♀️", "🍂", "🐦‍⬛", "🍕", "🖕"];
  const randomIndex = Math.floor(Math.random() * emojis.length);
  return emojis[randomIndex];
}

function updateHeadline(randomiseHOne: () => string): void {
  const headlineElement = document.getElementById(
    "headline"
  ) as HTMLHeadElement;
  if (headlineElement) {
    headlineElement.innerText = randomiseHOne();
  }
}

const button = document.getElementById("randomButton") as HTMLButtonElement;
if (button) {
  button.addEventListener("click", () => {
    const functions = [randomNumber, randomText, randomBoolean, randomEmoji];
    const randomFN = functions[Math.floor(Math.random() * functions.length)];
    updateHeadline(randomFN);
  });
}
