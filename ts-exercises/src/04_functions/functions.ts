// # Functions-TS-Grundlagen-Level-1_4

function showHero(
  heroName: string,
  heroPower: string,
  heroEnemy: string
): void {
  const nameOutput: string = `Mein:e Lieblingsheld:in ist: ${heroName}`;
  const powerOutput: string = `Er/sie hat die Fähigkeit: ${heroPower}`;
  const enemyOutput: string = `Sein/ihr größte/r Gegner:in ist ${heroEnemy}`;

  console.log(nameOutput + " " + powerOutput + " " + enemyOutput);
}

showHero(
  "Wonder Woman",
  "übermenschliche Stärke, Schnelligkeit und die Fähigkeit, fliegen zu können",
  "Dr. Psycho"
);

// # Functions-TS-Grundlagen-Level-1_6

function returnOne(): number {
  return 1;
}

const x: number = 1;
const y: number = returnOne();

if (x === y) {
  console.log("Wird das gedruckt?");
}

// # Functions-TS-Grundlagen-Level-1_7

function multiplyTwo(anyNumber: number): number {
  return anyNumber * 2;
}

const result = multiplyTwo(8);
console.log({ result });

// # Functions-TS-Grundlagen-Level-1_8
// - Teil 1

function myAge(birthYear: number): number {
  const thisYear = new Date().getFullYear();
  const age = thisYear - birthYear;
  return age;
}

// ich kann hier die gleiche Variable benutzen wie in der Funktion - muss sie aber neu definieren!! - da, die Variable innerhalb der Funktion, außerhalb "nicht existiert", sie ist verpackt in der Funktion!
// wie ich die Variable nenne ist aber egal, ich hätte sie auch `const alteSchachtel = myage(1982)` nennen können
const age = myAge(1982);
console.log({ age });

// - Teil 2

function compairBirthdays(friend1: number, friend2: number): number {
  const resultDifference = friend1 % friend2;
  return resultDifference;
}

const differenceInYears = compairBirthdays(1982, 1973);
console.log({ differenceInYears });

// # Functions-TS-Grundlagen-Level-1_9

function aboutAurora(
  firstName: string,
  lastName: string,
  birthPlace: string,
  age: number,
  homePlace: string
): string {
  const aurorasDetails = `Mein Name ist ${firstName} ${lastName}. Ich bin in ${birthPlace} geboren. Ich lerne bei SuperCode. Ich bin ${age} Jahre alt. Ich wohne in ${homePlace}.`;
  return aurorasDetails;
}

const thisIsAurora = aboutAurora(
  "Aurora",
  "Stardust",
  "New York",
  20,
  "Celestia"
);
console.log(thisIsAurora);
