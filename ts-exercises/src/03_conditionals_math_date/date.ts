const date1: Date = new Date("September 2, 2019 09:00:00");
const date2: Date = new Date(0);
const date3: Date = new Date(31556908800);
const date4: Date = new Date(86400000);

let output: string = `
    <p>Date 1: ${date1.toString()}</p>
    <p>Date 2: ${date2.toString()}</p>
    <p>Date 3: ${date3.toString()}</p>
    <p>Date 4: ${date4.toString()}</p>
`;

document.getElementById("dateOutput")!.innerHTML = output;

// #  Date-TS-Level2_1

const currentDate: Date = new Date();
