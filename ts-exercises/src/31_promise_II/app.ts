// ##### callback-TS-Level-1_3
console.log("%c callback-TS-Level-1_3 ", "background: white; color: green");

function sayHello(name: string, callback: (message: string) => void): void {
  const message = `Hello, ${name}`;
  callback(message);
}

function greetingCallback(message: string): void {
  console.log(message);
}

sayHello("Elisa", greetingCallback);
sayHello("Farid", greetingCallback);
sayHello("Marco", greetingCallback);
