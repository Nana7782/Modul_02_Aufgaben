import Animal from "./classes/Animal";
import Person from "./classes/Person";
import Car from "./classes/Car";
import Driver from "./classes/Driver";
import { CarType } from "./classes/CarType";
import { Gender } from "./classes/Person";
import IceCreamFlavor from "./classes/IceCreamFlavor";
import Customer from "./classes/Customer";

// ##### OOP-Class-TS-Level-1_3
console.log("%c OOP-Class-TS-Level-1_3 ", "background: white; color: green");

const animal = new Animal("Dog", 5, "Brown");
console.log(
  `Species: ${animal.species}, Age: ${animal.age}, Color: ${animal.color}`
);

const person = new Person(new Date(1980, 5, 5));
person.name = "Alice";
person.gender = Gender.Other;
console.log(person);

// ##### OOP-Class-TS-Level-1_13
console.log("%c OOP-Class-TS-Level-1_13 ", "background: white; color: green");

const car1 = new Car("Ford Mustang Fastback", 1967, CarType.Coupe);
car1._currentSpeed = 210;

const car2 = new Car("Bitter CD", 1973, CarType.Coupe);
car2._currentSpeed = 240;

const car3 = new Car("Chevrolet Corvette C2 Sting Ray", 1963, CarType.Coupe);
car3._currentSpeed = 225;

const car4 = new Car("Buick Invicta", 1959, CarType.Coupe);
car4._currentSpeed = 190;

const driver1 = new Driver("Steve", "McQueen", 50, car1, 1946);
const driver2 = new Driver("Elton", "John", 77, car2, 1963);
const driver3 = new Driver("David", "Hasselhoff", 72, car3, 1968);
const driver4 = new Driver("James", "Dean", 24, car4, 1947);

function showCarAndDriverDetails(driver: Driver) {
  console.log(driver.getDriverDetails());
  console.log(`Definition of max speed: ${driver._car.getSpeedInfo()}`);
  console.log("--------");
}

showCarAndDriverDetails(driver1);
showCarAndDriverDetails(driver2);
showCarAndDriverDetails(driver3);
showCarAndDriverDetails(driver4);

// ##### OOP-Class-TS-Level-1_12
console.log("%c OOP-Class-TS-Level-1_12 ", "background: white; color: green");

const vanilla = new IceCreamFlavor(
  "Vanilla",
  2.1,
  true,
  "Classic vanilla flavor"
);
const chocolate = new IceCreamFlavor(
  "Chocolate",
  2.5,
  false,
  "Rich chocolate flavor"
);
const strawberry = new IceCreamFlavor(
  "Strawberry",
  2.3,
  true,
  "Fresh strawberry ice cream"
);

vanilla.printInfo();
chocolate.printInfo();
strawberry.printInfo();

const totalVanilla = vanilla.getTotalPrice(3);
console.log(
  `Total price for 3 scoops of Vanilla: ${totalVanilla.toFixed(2)} Euro`
);
console.log(
  `Length of Vanilla description: ${vanilla.getLengthOfDescription()}`
);

// ##### OOP-Class-TS-Level-2_3
console.log("%c OOP-Class-TS-Level-2_3 ", "background: white; color: green");

const customer = new Customer(
  "Cindy Lauper",
  "cindy@icloud.com",
  "Ozone Park",
  12345,
  "New York"
);

customer.setName(
  "öalsjdlknascuiohaerptoksmdcklömasüäplakpüslxäaöm,scl.namsnkcjnhbaoi"
);
customer.setPostalCode(123456);
customer.setEmail("email.de");

console.log(`Name: ${customer.name}`);
console.log(`E-Mail: ${customer.email}`);
console.log(`Adress: ${customer.address}`);
console.log(`Postalcode: ${customer.postalCode}`);
console.log(`City: ${customer.city}`);
