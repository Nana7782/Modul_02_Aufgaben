// # String-Methods-TS-Level-1_1 ---------- length()

const firstName: string = "Nana";
const lastName: string = "Napalm";

const firstNameLength: number = firstName.length;
console.log(firstNameLength);

const lastNameLength: number = lastName.length;
console.log(lastNameLength);

const fullNameLength: number = firstNameLength + lastNameLength;
console.log(fullNameLength);

// # String-Methods-TS-Level-1_2 ----------indexOf()

const earthQuote: string =
  "How inappropriate to call this planet Earth, when clearly it is Ocean.";

const earthQuoteIndexOf_h: number = earthQuote.indexOf("h");
console.log(earthQuoteIndexOf_h);

const earthQuoteIndexOf_Earth: number = earthQuote.indexOf("Earth");
console.log({ earthQuoteIndexOf_Earth });

const earthQuoteIndexOf_Moon: number = earthQuote.indexOf("Moon");
console.log({ earthQuoteIndexOf_Moon });

// # String-Methods-TS-Level-1_3 --------search()

let oceanQuote: string =
  "Blue, green, grey, white, or black; smooth, ruffled, or mountainous; that ocean is not silent.";

let oceanQuoteSearch_semikolon: number = oceanQuote.search(";");
console.log({ oceanQuoteSearch_semikolon });

let oceanQuoteSearch_green: number = oceanQuote.search("green");
console.log(oceanQuoteSearch_green);

let oceanQuoteSearch_blue: number = oceanQuote.search("blue");
console.log(oceanQuoteSearch_blue);

// # String-Methods-TS-Level-1_4  ----------- slice()

const susisStatus: string = "Susi is going to codingschool.";

const sliceSusi: string = susisStatus.slice(0, 4);
const sliceIs: string = susisStatus.slice(5, 7);
const sliceIsGoingTo: string = susisStatus.slice(5, 17);
const sliceSchool: string = susisStatus.slice(23);

const boxElement = document.querySelector(".box");
if (boxElement) {
  let paragraphVomHTML = document.querySelector(".paragraph")!;
  paragraphVomHTML.innerHTML = sliceSusi;
  {
    let paragraphVomHTML = document.querySelector(".paragraph1")!;
    paragraphVomHTML.innerHTML = sliceIs;
  }
  {
    let paragraphVomHTML = document.querySelector(".paragraph2")!;
    paragraphVomHTML.innerHTML = sliceIsGoingTo + sliceSchool;
  }
  {
    let paragraphVomHTML = document.querySelector(".paragraph3")!;
    paragraphVomHTML.innerHTML = sliceSchool;
  }
  {
    let paragraphVomHTML = document.querySelector(".paragraph4")!;
    paragraphVomHTML.innerHTML = sliceSusi + " " + sliceIs + " " + sliceSchool;
  }
}

// #  String-Methods-TS-Level-1_5 --------- substrin()

// const whereIsSusi: string = "Susi is back from codingschool";

// const susiVar: string = whereIsSusi.substring(0, 5);
// const susiIsVar: string = whereIsSusi.substring(5, 8);
// const susiSchoolVar: string = whereIsSusi.substring(24);
// console.log(susiSchoolVar);

// document.open();
// document.write(susiVar) + <br>;
// document.write(susiIsVar) + <br>;
// document.write(susiSchoolVar) + <br>;
// document.close();

// #   String-Methods-TS-Level-1_6 -------------substr()
// ! ------------- OUTDATED ! --------------

const susisJob: string = "Sam is working at codingschool";

const samVar: string = susisJob.substr(0, 3);

// #   String-Methods-TS-Level-1_7 -------------- replace()

const samsStatus: string = "Sam is good at codingschool";
const samStatusBad: string = samsStatus.replace("good", "bad");
console.log(samStatusBad);
const samsStatusSchool: string = samsStatus.replace("coding", "");
console.log(samsStatusSchool);
const samsStatusTennis: string = samsStatus.replace("codingschool", "tennis");
console.log(samsStatusTennis);

// #  String-Methods-TS-Level-1_8 ------------ toUpperCase()

const whereIsSam: string = "Sam is going to school";
const samUp: string = whereIsSam.toUpperCase();
console.log(samUp);
const samLow: string = whereIsSam.toLowerCase();
console.log(samLow);

const samSchool: string = whereIsSam.substring(16).toUpperCase();
const samGoingTo: string = whereIsSam.substring(4, 15).toUpperCase();
const samCapital: string = whereIsSam.replace(
  "Sam is going to schoon",
  "Sam Is Going To School"
);
console.log(samCapital);

// Keine Ahnung!?

// #  String-Methods-TS-Level-1_9  ----------- concat()

const infoAboutSam: string = "Sam is going to codingschool";
const susi: string = "Susi";
const and: string = "and";

const samMovie: string = infoAboutSam.concat(
  " " + and + " to the movie theater"
);
console.log(samMovie);

// ......to be continued

// #  Number-Methods-TS-Level-1_2 ------------ toFixed()

let num: number = 15.16698;
let numRounded: string = num.toFixed(2);
// ? Warum muss das :string sein?

console.log(numRounded);

num = 7.78714;
numRounded = num.toFixed(2);
console.log(numRounded);

// #  Number-Methods-TS-Level-1_3 ----------toString()

let test: number = 15.16698;

let a: string = test.toString();
let b: string = test.toString(2);
let c: string = test.toString(8);
let d: string = test.toString(16);
console.log({ a });
console.log(b);
console.log(c);
console.log(d);

let test2: number = 7.78714;

let a2: string = test2.toString();
let b2: string = test2.toString(2);
let c2: string = test2.toString(8);
let d2: string = test2.toString(16);
console.log({ a2 });
console.log(b2);
console.log(c2);
console.log(d2);

// #  Number-Methods-TS-Level-1_4  ----------- Number()

const x: number = 15.16698;
const y: number = Number(x);
console.log(y);

const e: number = 7.78714;
const f: number = Number(e);
console.log(f);

const g: string = "12.3";
const h: number = Number(g);
console.log(h);

const i: string = "3.14random";
const j: number = Number(i);
console.log(i);

const k: boolean = true;
const l: number = Number(k);
console.log(l);

const m: string = "Supercode";
const n: number = Number(m);
console.log(n);
