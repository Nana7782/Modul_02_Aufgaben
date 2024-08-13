// ##### Clean-Code-TS-Level-1_1
console.log("%c Clean-Code-TS-Level-1_1 ", "background: white; color: green");

const text = document.getElementById("text-input") as HTMLInputElement;
const upperBtn = document.getElementById("uppercase") as HTMLButtonElement;
const spacesBtn = document.getElementById("spaces") as HTMLButtonElement;
const vowelsBtn = document.getElementById("vowels") as HTMLButtonElement;

let userInput: string;

function setUserInput(): string {
  return (userInput = text.value);
}

function countUpperCase(): number {
  setUserInput();
  let count = 0;
  for (let i = 0; i < userInput.length; i++) {
    const char = userInput[i];
    if (char >= "A" && char <= "Z") {
      count++;
    }
  }
  console.log(`Anzahl der Großbuchstaben ${count}`);
  return count;
}

upperBtn.addEventListener("click", countUpperCase);

function countSpaces(): number {
  setUserInput();
  const countOfSpaces: number = userInput.split(" ").length - 1;
  console.log(countOfSpaces);
  return countOfSpaces;
}
spacesBtn.addEventListener("click", countSpaces);

function countVowels() {
  setUserInput();
  const allVowels = userInput.match(/[aeiouAEIOU]/g);
  console.log(allVowels);
  const allVowelsLength = allVowels?.length;
  console.log(`Anzahl der Vokale ${allVowelsLength}`);
}

vowelsBtn.addEventListener("click", countVowels);

// ******************************************

// ##### Clean-Code-TS-Level-2_1
console.log("%c Clean-Code-TS-Level-2_1 ", "background: white; color: green");

// const getNumberText = (num: number | undefined): string =>
//     ['One', 'Two', 'Three', 'Four', 'Five'][num ? num - 1 : 0 - 1] ?? 'Unknown';

//   const userInput: number = Math.ceil(Math.random() * 7);
//   console.log(userInput);
//   const numberText = getNumberText(userInput);
//   console.log(numberText);

// ! da wird versucht user Eingaben zwischen 1 und 5 abzurufen, aber die Funktion selber schmeißt selbst gerundete Zahlen zwischen 1 und 7 raus, was auch das Ergebnis "unknown" ausspuckt. Macht also gar keinen Sinn. Außerdem führt index 0 -1 zu -1, was auch falsch ist

const getNumberText = (num: number): string => {
  const numberTexts: string[] = ["One", "Two", "Three", "Four", "Five"];

  if (num < 1 || num > 5) {
    return "Unknown";
  }

  const index: number = num - 1;
  return numberTexts[index];
};

const userInput2: number = Math.ceil(Math.random() * 5); // userInput2, weil oben schon verwendet
console.log(userInput2);
const numberText = getNumberText(userInput2);
console.log(numberText);

// ******************************************

// ##### Clean-Code-TS-Level-3_1
console.log("%c Clean-Code-TS-Level-3_1 ", "background: white; color: green");

// enum TaskType {
//     Urgent = 4,
//     NotUrgent = 2,
//     Info = 1
//   }

//   type Task = { name: string };

//   let n = 'todo';
//   let array: string[] = [];
//   let array2: Task[] = [];

//   // Get the input from the user for a task
//   const input1 = prompt('Bitte geben Sie eine Aufgabe ein:');
//   array.push(input1 || '');
//   let inputObject1 = { name: input1 || '' };
//   array2.push(inputObject1);
//   // Log the task to the console
//   console.log('Aufgabe erstellt ' + input1 + ' von ' + n);

//   // Get the input from the user for a task
//   const input2 = prompt('Bitte geben Sie noch eine Aufgabe ein:');
//   array.push(input2 || '');
//   let inpObj2 = { name: input2 || '' };
//   array2.push(inpObj2);

//   console.log('debug1 - after 2');

//   // Log the task to the console
//   console.log('Aufgabe erstellt ' + input2 + ' von ' + n);
//   // Get the input from the user for a task
//   const input3 = prompt('Bitte geben Sie noch eine Aufgabe ein:');
//   array.push(input3 || '');
//   let io3 = { name: input3 || '' };
//   array2.push(io3);
//   // Log the task to the console
//   console.log('Aufgabe erstellt ' + input3 + ' von ' + n);

//   console.log('debug1');
//   // // Get the input from the user for a task
//   // const input3 = prompt('Bitte geben Sie noch eine Aufgabe ein:');
//   // array.push(input3 || '');
//   // let io3 = { name: input3 || '' };
//   // array2.push(io3);
//   // // Log the task to the console
//   // console.log('Aufgabe erstellt ' + input3 + ' von ' + n);

//   // // Get the input from the user for a task
//   // const input3 = prompt('Bitte geben Sie noch eine Aufgabe ein:');
//   // array.push(input3 || '');
//   // let io3 = { name: input3 || '' };
//   // array2.push(io3);
//   // // Log the task to the console
//   // console.log('Aufgabe erstellt ' + input3 + ' von ' + n);

//   if (array[0] === '') {
//     array.shift();
//   } else if (array[1] === '') {
//     array.shift();
//   } else if (array[2] === '') {
//     array.shift();
//   }
//   // no good user input - clear the other array too
//   if (!array.length) {
//     array2 = [];
//   } else {
//     filterThem(array, 'asc');
//     filterThem2(array2, 'asc');
//   }
//   //not urgent as default - fix later
//   array2.forEach((e) => {
//     (e as any).type = TaskType.NotUrgent;
//   });

//   console.log('debug7 - before result outside');
//   let resultOutside = 0;
//   function addItAllUp(): void {
//     let result = 0;
//     for (let i = 0; i < 100; i++) {
//       for (let j = 0; j < 100; j++) {
//         for (let k = 0; k < 100; k++) {
//           result += i + j + k;
//         }
//       }
//     }
//     console.log('Die maximale Anzahl der Aufgaben ist: ' + result);
//     resultOutside = result;
//   }

//   if (array.length > 0 && array.length <= 3 && array2.length > 0 && array2.length <= 3) {
//     console.log('Die Anzahl der Aufgaben liegt zwischen 1 und 2.');
//   } else if (array.length > resultOutside) {
//     console.log('Die Anzahl der Aufgaben liegt außerhalb des erwarteten Bereichs.');
//   }

//   processTasks();

//   function filterThem(a: string[], b: string): string {
//     const ret = a.concat();
//     if (b === 'rev') {
//       ret.reverse();
//     } else if (b === 'no') {
//       ret;
//     } else if (b === 'asc') {
//       ret.sort((a, b) => a.localeCompare(b));
//     } else if (b === '') {
//       ret;
//     }
//     return ret.toString();
//   }

//   function filterThem2(a: Task[], b: string): string {
//     const ret = a.concat();
//     if (b === 'rev') {
//       ret.reverse();
//     } else if (b === 'no') {
//       ret;
//     } else if (b === 'asc') {
//       ret.sort((a, b) => b.name.localeCompare(a.name));
//     } else if (b === '') {
//       ret;
//     }

//     return ret.toString();
//   }

//   // This function will proces all the tasks
//   function processTasks(): void {
//     //Todo: implement later
//     console.log('implement later');
//   }

// ! Ich kann den Code auf Anhieb nicht korrigieren, aber was ich sehe, was falsch ist:
// * die Lesbarkeint und Nachvollziehbarkeit ist schwierig => Aufgaben / Abfragen mit  quasi identischem Code
// * DRY wird also nicht befolgt, da einiges mehrfach wiederholt wird
// * Variablennamen z.T. nicht aussagekräftig (io3, inpObj2) ?????
// * ganz schön viele Kommentare!
// * let n = todo ? - was soll denn das sein? genauso wie let array:string[]=[]
// * resultOutside erschließt sich mir nicht - wird aufgerufen, aber ist eigentlich keine Funktion
// * auskommentierter Code (im Original, ich hab ja den ganzen Code auskommentiert) hat da eigentlich nichts drin zu suchen
