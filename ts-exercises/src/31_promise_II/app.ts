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

// ##### Promises-TS-Level-1_4
console.log("%c Promises-TS-Level-1_4 ", "background: white; color: green");

function homework1(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true;
      if (success) {
        resolve("Exercise 1 done.");
      } else {
        reject("Excercise 1 failed");
      }
    }, 1000 * 2);
  });
}

function homework2(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true;

      if (success) {
        resolve("Exercise 2 done.");
      } else {
        reject("Exercise 2 failed.");
      }
    }, 1000 * 3);
  });
}

function homework3(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true;

      if (success) {
        resolve("Exercise 3 done.");
      } else {
        reject("Exercise 3 failed.");
      }
    }, 1000 * 4);
  });
}

function runHomework() {
  Promise.all([homework1(), homework2(), homework3()])
    .then((results) => {
      results.forEach((result) => {
        paragraph.textContent += `${result}\n`;
      });
      paragraph.textContent += "Homework done\n";
    })
    .catch((error) => {
      paragraph.textContent += `${error}\n`;
    });
}

const paragraph = document.getElementById(
  "homework-status"
) as HTMLParagraphElement;

runHomework();
