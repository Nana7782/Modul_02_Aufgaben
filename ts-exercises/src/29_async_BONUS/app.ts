import Customer from "./classes/Customer";
import ContactType from "./modules/ContactType";
import OrderStatus from "./modules/OrderStatus";

function processOrder(
  name: string,
  callback: (name: string, status: OrderStatus) => void
) {
  console.log(`Processing order for ${name}...`);

  const statuses = [
    OrderStatus.Processing,
    OrderStatus.ReadyForShipping,
    OrderStatus.Shipped,
    OrderStatus.Delivered,
  ];
  const statusMessages: { [key in OrderStatus]: string } = {
    [OrderStatus.Processing]: "Order is being processed...",
    [OrderStatus.ReadyForShipping]: "Order is ready for shipping.",
    [OrderStatus.Shipped]: "Order has been shipped.",
    [OrderStatus.Delivered]: "Order has been delivered.",
    [OrderStatus.Unknown]: "Unknown order status.",
    [OrderStatus.Cancelled]: "Order has been cancelled.",
  };
  for (const status of statuses) {
    const message =
      statusMessages[status] || statusMessages[OrderStatus.Unknown];
    console.log(message);
    callback(name, status);
  }
}

function sendEmail(name: string, status: OrderStatus) {
  console.log(`Send email to ${name}. Status: ${OrderStatus[status]}`);
}

function sendSMS(name: string, status: OrderStatus) {
  console.log(`Send sms to ${name}. Status: ${OrderStatus[status]}`);
}

function sendLetter(name: string, status: OrderStatus) {
  console.log(`Send letter to ${name}. Status: ${OrderStatus[status]}`);
}

function doNothing(name: string, status: OrderStatus) {
  console.log("No info");
}

function processCustomerOrder(customer: Customer) {
  const contactCallbacks: {
    [key in ContactType]: (name: string, status: OrderStatus) => void;
  } = {
    [ContactType.Email]: sendEmail,
    [ContactType.SMS]: sendSMS,
    [ContactType.Letter]: sendLetter,
    [ContactType.None]: doNothing,
  };

  const callback = contactCallbacks[customer.contactType];

  processOrder(customer.name, callback);
}

const customer1 = new Customer(
  "Danny Torrance",
  "237 Elm St",
  "555-123-4567",
  "danny@overlook.com",
  ContactType.Email
);
const customer2 = new Customer(
  "Annie Wilkes",
  "456 Castle Rock Rd",
  "888-765-4321",
  "annie@booklover.com",
  ContactType.SMS
);
const customer3 = new Customer(
  "Carrie White",
  "789 High School Ave",
  "333-555-6666",
  "carrie@telekinesis.com",
  ContactType.Letter
);
const customer4 = new Customer(
  "Gage Creed",
  "321 Pet Sematary Rd",
  "444-888-9999",
  "gage@resurrection.com",
  ContactType.None
);

processCustomerOrder(customer1);
processCustomerOrder(customer2);
processCustomerOrder(customer3);
processCustomerOrder(customer4);
