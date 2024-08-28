import ContactType from "../modules/ContactType";

class Customer {
  constructor(
    public name: string,
    public address: string,
    public phone: string,
    public email: string,
    public contactType: ContactType
  ) {}
}

export default Customer;
