import IStudent from "./interfaces/IStudents";
import { Cocktail } from "./alcohol";
import "./lottoNumbers";

// ##### OOP-TypeCast-TS-Level-1_1
console.log("%c OOP-TypeCast-TS-Level-1_1 ", "background: white; color: green");

function processStudents(student: IStudent) {
  console.log(`Processing ${student.name}`);
}

const student1 = {
  name: "Henry Rollins",
  age: 23,
};

const student1IStudent = {
  ...student1,
  grade: 1.5,
} as IStudent;

processStudents(student1IStudent);
console.log(student1IStudent);

const student2 = {
  age: 22,
};

const student2IStudent = { ...student2 } as IStudent;
processStudents(student2IStudent); // - Ausgabe Processing undefined

// ##### OOP-UnionType-TS-Level-1_1
console.log(
  "%c OOP-UnionType-TS-Level-1_1 ",
  "background: white; color: green"
);

type Result = "success" | "error" | "pending";

const currentResult: Result = "success";

function handleResult(result: Result): void {
  switch (result) {
    case "success":
      console.log("Whatever you tried, it was successful");
      break;
    case "error":
      console.log("This failed completely");
      break;
    case "pending":
      console.log("It is not yet clear whether it worked or not");
      break;
    default:
      const checkForNotExisistingResult: never = result;
      throw new Error(
        `Unknown value of Result: ${checkForNotExisistingResult}`
      );
  }
}

handleResult(currentResult);
handleResult("error");
handleResult("pending");
// handleResult("pizza");  //- triggers ErrorMessage

// ##### OOP-IntersectionType-TS-Level-1_1
console.log(
  "%c OOP-IntersectionType-TS-Level-1_1 ",
  "background: white; color: green"
);

const myCocktail: Cocktail = {
  name: "Mojito",
  percentage: 15,
  type: "Rum",
  carbonated: true,
};

console.log(`Cocktail: ${myCocktail.name}`);
console.log(`Percentage: ${myCocktail.percentage}%`);
console.log(`Type: ${myCocktail.type}`);
console.log(`Carbonated: ${myCocktail.carbonated ? "Yes" : "No"}`);

// ##### OOP-ErrorHandling-TS-Level-1_1
console.log(
  "%c OOP-ErrorHandling-TS-Level-1_1 ",
  "background: white; color: green"
);

function greetUser(): void {
  try {
    const userName = window.prompt("Please enter your name:");
    if (!userName) {
      throw new Error("No name given.");
    }

    console.log(`Hi ${userName}! Welcome!`);
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error(errorMessage);
    console.log("Hello, dear visitor! Welcome!");
  }
}

// greetUser();
