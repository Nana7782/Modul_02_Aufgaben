import { NewCustomer, ObjectWithFN, Monster } from "../00_models/types";

// ##### Functions-TS-Grundlagen-Level-1_1
console.log(
  "%c Functions-TS-Grundlagen-Level-1_1 ",
  "background: white; color: green"
);

function intro1(): void {
  console.log("Hello Function");
}

intro1();

const intro2 = () => {
  console.log("Hello Arrow-Function");
};
intro2();

// ##### Functions-TS-Grundlagen-Level-1_2
console.log(
  "%c Functions-TS-Grundlagen-Level-1_2 ",
  "background: white; color: green"
);

// -1
function hello(): void {
  const helloOutput = document.createElement("p") as HTMLParagraphElement;
  helloOutput.innerText = "Hallo";
  document.body.appendChild(helloOutput);
}
hello();

// - 2

function sumAB(a: number, b: number): number {
  return a + b;
}

let zahl1 = 42;
let zahl2 = 66;
let ergebnis = sumAB(zahl1, zahl2);
console.log(`Die Summe von ${zahl1} und ${zahl2} ist ${ergebnis}`);

// -3
function multiply(a: number, b: number): number {
  return a * b;
}
// - ich verwende die Zahlen aus der 2. FN

let ergebnis2 = multiply(zahl1, zahl2);
// window.alert(`Die Summe von ${zahl1} mal ${zahl2} ist ${ergebnis2}`);

// - 4

const einObjec = {
  name: "Linda",
  nachname: "de Mol",
  alter: 60,
  showInfo: function (): void {
    console.log(this.name, this.nachname, this.alter);
  },
};

einObjec.showInfo();

// * ups, hab ich wohl this. eine Aufgabe zu früh verwendet :D

// ##### This-TS-Level-1_2
console.log("%c This-TS-Level-1_2 ", "background: white; color: green");

let person = {
  vorname: "Anton",
  nachname: "Fish",
  alter: 34,
  familienstand: "ledig",
  groesse: 1.78,
  zeigeProfil: function () {
    return `Vorname ${this.vorname}, Nachname ${this.nachname}, Alter ${this.alter}, Familienstand ${this.familienstand}, Größe ${this.groesse}m `;
  },
};

document.getElementById("person")!.innerHTML = person.zeigeProfil();

let person2 = {
  vorname: "Gustav",
  nachname: "Gans",
  alter: 75,
  familienstand: "ledig",
  groesse: 1.21,
  zeigeProfil: () => {
    return `Vorname: ${person2.vorname}, Nachname: ${person2.nachname}, Alter: ${person2.alter}, Familienstand: ${person2.familienstand}, Größe: ${person2.groesse}m`;
  },
};

console.log(person2.zeigeProfil());

// ##### Functions-TS-Level-1_6
console.log("%c Functions-TS-Level-1_6 ", "background: white; color: green");

function createMonster(
  name: string,
  type: string,
  health: number = 100,
  strength: number = 50,
  speed: number = 25
): Monster {
  return {
    name: name,
    type: type,
    health: health,
    strength: strength,
    speed: speed,
  };
}

const monster1 = createMonster("Goblin", "Kreatur");
const monster2 = createMonster("Orc", "Krieger", 150);
const monster3 = createMonster("Dragon", "Drachen", 200, 80);
const monster4 = createMonster("Zombie", "Untoter", 120, 30, 10);

console.log(monster1);
console.log(monster2);
console.log(monster3);
console.log(monster4);

// ##### Functions-TS-Level-2_2
console.log("%c Functions-TS-Level-2_2 ", "background: white; color: green");

function greetNewUser1(customer: NewCustomer): string {
  const { firstName, lastName, email, phone } = customer;
  let greeting = `Hello ${firstName} ${lastName}.`;

  if (email && phone) {
    greeting += ` We will contact you via ${email} and ${phone}`;
  } else if (email) {
    greeting += ` We will contact you via ${email}`;
  } else if (phone) {
    greeting += ` We will contact you via ${phone}`;
  } else {
    greeting += ` We will not contact you`;
  }

  return greeting;
}

function greetNewUser2(
  firstName: string,
  lastName: string,
  email?: string,
  phone?: string
): string {
  let greeting = `Hello ${firstName} ${lastName}.`;

  if (email && phone) {
    greeting += ` We will contact you via ${email} and ${phone}`;
  } else if (email) {
    greeting += ` We will contact you via ${email}`;
  } else if (phone) {
    greeting += ` We will contact you via ${phone}`;
  } else {
    greeting += ` We will not contact you`;
  }

  return greeting;
}

document
  .getElementById("customerForm")!
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = (document.getElementById("firstName") as HTMLInputElement)
      .value;
    const lastName = (document.getElementById("lastName") as HTMLInputElement)
      .value;
    const email =
      (document.getElementById("email") as HTMLInputElement).value || undefined;
    const phone =
      (document.getElementById("phone") as HTMLInputElement).value || undefined;

    const newCustomer: NewCustomer = {
      firstName,
      lastName,
      email,
      phone,
    };

    const greeting1 = greetNewUser1(newCustomer);
    const greeting2 = greetNewUser2(firstName, lastName, email, phone);

    console.log(greeting1);
    document.getElementById("output")!.innerText = greeting2;
  });
