export enum Gender {
  Male = "Male",
  Female = "Female",
  Other = "Other",
}

class Person {
  private _name!: string;
  private _birthday: Date;
  private _gender!: Gender;

  constructor(birthday: Date) {
    this._birthday = birthday;
  }

  get birthday() {
    return this._birthday;
  }

  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }

  get gender(): Gender {
    return this._gender;
  }
  set gender(gender: Gender) {
    this._gender = gender;
  }
}

export default Person;
