// ##### Loops-TS-Level-1_10
console.log("%c Loops-Level-1_10 ", "background: white; color: green");

function getHighestNumber(numbers: number[]): number | null {
  let highest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > highest) {
      highest = numbers[i];
    }
  }
  return highest;
}
console.log(getHighestNumber([1, 2, 3, 9, 4, 5]));

// ##### Loops-TS-Level-1_11
console.log("%c Loops-Level-1_11 ", "background: white; color: green");

function calculateSum(maxNumber: number): number {
  let sum: number = 0;
  for (let i = 1; i <= maxNumber; i++) {
    sum += i;
  }
  return sum;
}

console.log(calculateSum(666));

// ##### Loops-TS-Level-2_3
console.log("%c Loops-Level-2_3 ", "background: white; color: green");

function getNumberOfVowels(inputString: string) {
  const vowels = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];
  let vowelCount = 0;
  for (let i = 0; i < inputString.length; i++) {
    const character: string = inputString[i];
    if (vowels.includes(character)) {
      vowelCount++;
    }
  }
  return vowelCount;
}

console.log(getNumberOfVowels("Hello world"));
console.log(
  getNumberOfVowels("Hopefully one day I'll understand what I'm doing here")
);
console.log(
  getNumberOfVowels(
    "I want to be friends with typescript, but it seems like it hates me"
  )
);

// ##### Loops-TS-Level-2_4
console.log("%c Loops-Level-2_4 ", "background: white; color: green");

function addToFifty(): void {
  let sum: number = 0;
  while (sum <= 50) {
    const randomNumber: number = Math.floor(Math.random() * 10) + 1;
    sum += randomNumber;
    console.log(randomNumber);
  }
  console.log(`${sum} > 50. Stopping right here`);
}

addToFifty();

// ##### Loops-TS-Level-3_6
console.log("%c Loops-Level-3_6 ", "background: white; color: green");

function calcAverageGrade(scores: number[]) {
  let total = 0;
  let i = 0;
  while (i < scores.length) {
    total += scores[i];
    i++;
  }
  const average = total / scores.length;

  let grade = "";

  if (average < 50) {
    grade = "Ungenügend";
  } else if (average < 60) {
    grade = "Mangelhaft";
  } else if (average < 70) {
    grade = "Ausreichend";
  } else if (average < 80) {
    grade = "Befriedigend";
  } else if (average < 90) {
    grade = "Gut";
  } else {
    grade = "Sehr gut";
  }
  return { average, grade };
}
let results = [44, 11, 70, 80, 52, 88, 94, 3, 25, 46];

const { average, grade } = calcAverageGrade(results);

console.log(`Durchschnitt: ${average.toFixed(2)}, Bewertung: ${grade}`);
