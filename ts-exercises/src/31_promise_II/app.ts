// ##### callback-TS-Level-1_3
console.log("%c callback-TS-Level-1_3 ", "background: white; color: green");

function sayHello(name: string, callback: (message: string) => void): void {
  const message = `Hello, ${name}`;
  callback(message);
}

function greetingCallback(message: string): void {
  console.log(message);
}

sayHello("Elisa", greetingCallback);
sayHello("Farid", greetingCallback);
sayHello("Marco", greetingCallback);

// ##### Promises-TS-Level-1_4
console.log("%c Promises-TS-Level-1_4 ", "background: white; color: green");

function homework1(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true;
      if (success) {
        resolve("Exercise 1 done.");
      } else {
        reject("Excercise 1 failed");
      }
    }, 1000 * 2);
  });
}

function homework2(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true;

      if (success) {
        resolve("Exercise 2 done.");
      } else {
        reject("Exercise 2 failed.");
      }
    }, 1000 * 3);
  });
}

function homework3(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true;

      if (success) {
        resolve("Exercise 3 done.");
      } else {
        reject("Exercise 3 failed.");
      }
    }, 1000 * 4);
  });
}

function runHomework() {
  Promise.all([homework1(), homework2(), homework3()])
    .then((results) => {
      results.forEach((result) => {
        paragraph.textContent += `${result}\n`;
      });
      paragraph.textContent += "Homework done\n";
    })
    .catch((error) => {
      paragraph.textContent += `${error}\n`;
    });
}

const paragraph = document.getElementById(
  "homework-status"
) as HTMLParagraphElement;

runHomework();

// ##### callback-TS-Level-2_2
console.log("%c callback-TS-Level-2_2 ", "background: white; color: green");

function processData(
  numbers: number[],
  sortCallback: (numbers: number[]) => number[],
  transformCallback: (number: number) => number
): Map<number, string> {
  const sortedNumbers = sortCallback(numbers);
  const transformedNumbers = sortedNumbers.map(transformCallback);
  const result = new Map<number, string>();
  transformedNumbers.forEach((number) =>
    result.set(number, number.toString(16))
  );
  return result;
}

function sortDescending(numbers: number[]): number[] {
  return numbers.sort((a, b) => b - a);
}

function doubleNumber(number: number): number {
  return number * 2;
}

const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const array2 = [100, 50, 25, 75, 125];

const result1 = processData(array1, sortDescending, doubleNumber);
console.log("Ergebnis für Array 1:", result1);

const result2 = processData(array2, sortDescending, doubleNumber);
console.log("Ergebnis für Array 2:", result2);
