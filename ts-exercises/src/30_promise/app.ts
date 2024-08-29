import { lightFormat } from "date-fns";
import WeatherType from "./modules/WeatherType";

// ##### Promises-TS-Level-1_2
console.log("%c Promises-TS-Level-1_2 ", "background: white; color: green");

function getWeatherForecast(): Promise<WeatherType> {
  return new Promise((resolve, reject) => {
    const randomWeather: number = Math.floor(Math.random() * 10);
    console.log(randomWeather);
    if (randomWeather >= 0 && randomWeather <= 6) {
      resolve(randomWeather as WeatherType);
    } else {
      reject("Weather forecast could not be determined");
    }
  });
}

getWeatherForecast()
  .then((resp) => {
    console.log("Weather forecast:", WeatherType[resp]);
    console.log("%c Promises-TS-Level-1_3 ", "background: white; color: green");
    console.log("%c Promises-TS-Level-2_1 ", "background: white; color: green");
  })
  .catch((err) => {
    console.error("Error", err);
    console.log("%c Promises-TS-Level-1_3 ", "background: white; color: green");
    console.log("%c Promises-TS-Level-2_1 ", "background: white; color: green");
  });

// ##### Promises-TS-Level-1_3

const paragraph = document.getElementById(
  "homework-status"
) as HTMLParagraphElement;

function homework1(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success: boolean = true;
      if (success) {
        resolve("Exercise 1 done.");
      } else {
        reject("Excercise 1 failed");
      }
    }, 1000 * 20);
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
    }, 1000 * 30);
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
    }, 1000 * 40);
  });
}

function runHomework() {
  homework1()
    .then((result1) => {
      paragraph.textContent += `${result1}\n`;
      return homework2();
    })
    .then((result2) => {
      paragraph.textContent += `${result2}\n`;
      return homework3();
    })
    .then((result3) => {
      paragraph.textContent += `${result3}\n`;
    })
    .catch((error) => {
      paragraph.textContent += `${error}\n`;
    });
}

runHomework();

// ##### Promises-TS-Level-2_1

function generateRandomNumbers(): Promise<number[]> {
  return new Promise((resolve, reject) => {
    const randomNumbers = [
      Math.floor(Math.random() * 130) + 1,
      Math.floor(Math.random() * 130) + 1,
      Math.floor(Math.random() * 130) + 1,
    ];

    if (randomNumbers.some((num) => num > 100)) {
      reject("Value larger than 100");
    } else {
      resolve(randomNumbers);
    }
  });
}

generateRandomNumbers()
  .then((resp) => {
    console.log("Original values: ", resp);
    return resp.map((num) => num + 7);
  })
  .then((resp) => {
    console.log("After adding 7: ", resp);
    return resp.map((num) => num * 2);
  })
  .then((resp) => {
    console.log("After multiplying with 2: ", resp);
    return resp.map((num) => num - 1);
  })
  .then((resp) => {
    console.log("After subtracting 1: ", resp);
    return resp.map((num) => num % 2);
  })
  .then((resp) => {
    console.log("Modulo 2:", resp);
  })
  .catch((error) => {
    console.error("Error: ", error);
  })
  .finally(() => {
    console.log("Finished");
  });
