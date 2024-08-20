import Circle from "./classes/Circle";
import Manager from "./classes/manager";
import Subordinate from "./classes/Subordinate";
import Trainee from "./classes/Trainee";

// ! The files are stored more sensibly in the folder structure than the tasks intended!

// ##### OOP-Interface-TS-Level-1_1 & 1_2
console.log(
  "%c OOP-Interface-TS-Level-1_1 & 1_2 ",
  "background: white; color: green"
);

const circle1 = new Circle("red", 5);
const circle2 = new Circle("blue", 10);
const circle3 = new Circle("green", 15);

circle1.draw();
circle2.draw();
circle3.draw();

// ##### OOP-Interface-TS-Level-2_1 & 2_2
console.log(
  "%c OOP-Interface-TS-Level-2_1 & 2_2 ",
  "background: white; color: green"
);

// const subordinate1 = new Subordinate("Alice", 28, "Developer");
// const subordinate2 = new Subordinate("Tom", 30, "Designer");
// const subordinate3 = new Subordinate("Charles", 25, "Tester");

// const manager = new Manager("Claire", 42, "Team Lead");

// manager.addSubordinate(subordinate1);
// manager.addSubordinate(subordinate2);
// manager.addSubordinate(subordinate3);

// console.log(manager);

// const trainee1 = new Trainee("Sam", 19);
// const trainee2 = new Trainee("Liam", 18);

// manager.addSubordinate(trainee1);
// manager.addSubordinate(trainee2);

// console.log(manager);

const manager = new Manager("David", 45, new Date("2015-05-15"));
//const manager2 = new Manager()
const subordinate1 = new Subordinate("Alice", 28, new Date("2020-06-01"));
const subordinate2 = new Subordinate("Bob", 30, new Date("2019-03-10"));
const trainee1 = new Trainee("Charlie", 25, new Date("2023-01-15"));
const trainee2 = new Trainee("Diana", 22, new Date("2023-02-20"));

manager.addSubordinate(subordinate1);
manager.addSubordinate(subordinate2);
manager.addSubordinate(trainee1);
manager.addSubordinate(trainee2);

console.log(trainee1);
console.log(manager);
console.log(
  `Years of service for ${trainee1._name}: ${trainee1.getYearsOfService()}`
);
console.log(
  `Years of service for ${manager._name}: ${manager.getYearsOfService()}`
);
