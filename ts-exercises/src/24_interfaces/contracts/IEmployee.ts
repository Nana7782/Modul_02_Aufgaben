interface IEmployee {
  _name: string;
  _age: number;
  _position: string;
  _startDate: Date;

  getYearsOfService: () => number;
}

export default IEmployee;
