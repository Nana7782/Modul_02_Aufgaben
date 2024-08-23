import Activity from "./classes/Activity";
import Car from "./classes/Car";
import ElectricCar from "./classes/ElectricCar";
import InstanceChecker from "./classes/InstanceChecker";
import Running from "./classes/Running";
import Unicorn from "./classes/Unicorn";
import Yoga from "./classes/Yoga";
import { YogaType } from "./classes/Yoga";
import {
  Singer,
  FreddieMercury,
  MarilynManson,
  JoanJett,
  JohnyCash,
} from "./classes/Singer";

// ##### OOP-Class-TS-Level-1_7
console.log("%c OOP-Class-TS-Level-1_7 ", "background: white; color: green");

const emptyObject = {};
console.log(InstanceChecker.isUnicorn(emptyObject));

const myUnicorn = new Unicorn("Fridolin", ["purple", "green"]);
console.log(InstanceChecker.isUnicorn(myUnicorn));

// ##### OOP-Class-TS-Level-1_8
console.log("%c OOP-Class-TS-Level-1_8 ", "background: white; color: green");

const myCar = new Car();
const myElectricCar = new ElectricCar();

console.log(InstanceChecker.isCar(myCar));
console.log(InstanceChecker.isCar(myElectricCar));

console.log(InstanceChecker.isElectricCar(myCar));
console.log(InstanceChecker.isElectricCar(myElectricCar));

// ##### OOP-Class-TS-Level-1_11
console.log("%c OOP-Class-TS-Level-1_11 ", "background: white; color: green");

const activity = new Activity("Snorkeling", 2);
activity.execute();
activity.difficulty = 3;
console.log(activity.difficulty);

const yogaClass = new Yoga("Beer Yoga", 3, YogaType.Hatha);
yogaClass.execute();

const run = new Running("Idiot Run", 3, 5);
run.execute();
run.warmUp();
run.coolDown();

// ##### OOP-Class-TS-Level-2_6
console.log("%c OOP-Class-TS-Level-2_6 ", "background: white; color: green");

// function letsSing(singer: Singer): string {
//   let emoji: string;

//   switch (singer.constructor) {
//     case FreddieMercury:
//       emoji = "👨🏻‍🦱";
//       break;
//     case MarilynManson:
//       emoji = "👨🏻‍🎤";
//       break;
//     case JoanJett:
//       emoji = "👱🏻‍♀️";
//       break;
//     case JohnyCash:
//       emoji = "👨🏽‍🌾";
//       break;
//     default:
//       return "Unknown Singer";
//   }

//   return `${emoji} "${singer.name}" sings "${singer.sing()}"`;
// }

// const freddy = new FreddieMercury("Freddie Mercury");
// console.log(letsSing(freddy));

// const marilyn = new MarilynManson("Marilyn Manson");
// console.log(letsSing(marilyn));

// const joan = new JoanJett("Joan Jett");
// console.log(letsSing(joan));

// const johny = new JohnyCash("Johnny Cash");
// console.log(letsSing(johny));

const freddy = new FreddieMercury("Freddie Mercury");
console.log(freddy.letsSing());

const marilyn = new MarilynManson("Marilyn Manson");
console.log(marilyn.letsSing());

const joan = new JoanJett("Joan Jett");
console.log(joan.letsSing());

const johny = new JohnyCash("Johnny Cash");
console.log(johny.letsSing());
