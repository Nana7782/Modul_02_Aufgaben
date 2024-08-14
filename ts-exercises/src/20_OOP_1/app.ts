import { eachDayOfInterval } from "date-fns";
import Car from "./classes/Car";
import IceCreamFlavor from "./classes/IceCreamFlavor";
import SchoolClass from "./classes/SchoolClass";
import Student from "./classes/Student";
import Driver from "./classes/Driver";

// ##### OOP-Class-TS-Level-1_1
console.log("%c OOP-Class-TS-Level-1_1 ", "background: white; color: green");

const flavors: IceCreamFlavor[] = [
  new IceCreamFlavor("Vanilla", 1.5, true, "classic vanilla Taste"),
  new IceCreamFlavor("Chocolate", 1.8, true, "rich choclate taste"),
  new IceCreamFlavor("Strawberry", 1.6, true),
  new IceCreamFlavor("Walnut", 2.0, false),
];

flavors.forEach((flavor) => {
  if (flavor._isPopular) {
    console.log(flavor._name);
  }
});

// ##### OOP-Class-TS-Level-1_2
console.log("%c OOP-Class-TS-Level-1_2 ", "background: white; color: green");

const class1 = new SchoolClass(1, "Biology");
const class2 = new SchoolClass(2, "Chemistry");
const class3 = new SchoolClass(3, "English");

console.log(class1);
console.log(class2);
console.log(class3);

class1._name = "Microbiology";
class3._name = "Advanced English";

console.log(class1);
console.log(class2);
console.log(class3);

// ##### OOP-Class-TS-Level-2_1
console.log("%c OOP-Class-TS-Level-2_1 ", "background: white; color: green");
// ! reusing code from above ⬆️

const students: Student[] = [
  new Student(365, "Liam", "Neeson", new Date(2005, 4, 15)),
  new Student(229, "Catherine", "Jones", new Date(2005, 3, 20)),
  new Student(342, "Timothy", "Dalton", new Date(2005, 5, 5)),
];

students.forEach((student) => {
  class3.addStudent(student);
});

class3.listStudents();

// ##### OOP-Class-TS-Level-2_2
console.log("%c OOP-Class-TS-Level-2_2 ", "background: white; color: green");

const car1 = new Car("Ford Mustang Fastback", 1967);
const car2 = new Car("Bitter CD", 1973);
const car3 = new Car("Chevrolet Corvette C2 Sting Ray", 1963);
const car4 = new Car("Buick Invicta", 1959);

const driver1 = new Driver("Steve", "McQueen", 50, car1);
const driver2 = new Driver("Elton", "John", 77, car2);
const driver3 = new Driver("David", "Hasselhoff", 72, car3);
const driver4 = new Driver("James", "Dean", 24, car4);

console.log(driver1.getDriverDetails());
console.log(driver2.getDriverDetails());
console.log(driver3.getDriverDetails());
console.log(driver4.getDriverDetails());
