// import IEmployee from "../contracts/IEmployee";

// class Trainee implements IEmployee {
//   _name: string;
//   _age: number;
//   _position: string = "Trainee";

//   constructor(name: string, age: number) {
//     this._name = name;
//     this._age = age;
//   }
// }

import Employee from "./Emplyee";

class Trainee extends Employee {
  constructor(name: string, age: number, startDate: Date) {
    super(name, age, "Trainee", startDate);
  }
}

export default Trainee;
