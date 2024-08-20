// import IEmployee from "../contracts/IEmployee";

// class Manager implements IEmployee {
//   _name: string;
//   _age: number;
//   _position: string;
//   private _assignedEmployees: IEmployee[] = [];

//   constructor(name: string, age: number, position: string) {
//     this._name = name;
//     this._age = age;
//     this._position = position;
//   }

//   addSubordinate(employee: IEmployee): void {
//     this._assignedEmployees.push(employee);
//   }
// }

import Employee from "./Emplyee";

class Manager extends Employee {
  private assignedEmployees: Employee[] = [];

  constructor(name: string, age: number, startDate: Date) {
    super(name, age, "Manger", startDate);
  }

  public addSubordinate(employee: Employee): void {
    this.assignedEmployees.push(employee);
  }
}
export default Manager;
