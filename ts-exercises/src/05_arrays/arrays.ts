// #### Array-TS-Level-1_1

const bucketList: string[] = ["Edinburgh", "Ayutthaya", "Siem Reap"];
console.log(bucketList);

const luckyNumbers: number[] = [7, 13, 42];
console.log(luckyNumbers);

const favoritePeople: string[] = ["Daxi", "Dänjoo", "Olli"];
console.log(favoritePeople);

// #### Array-TS-Level-1_2

console.log(bucketList[0]);
console.log(bucketList[1]);
console.log(bucketList[2]);

console.log(luckyNumbers[0]);
console.log(luckyNumbers[1]);
console.log(luckyNumbers[2]);

console.log(favoritePeople[0]);
console.log(favoritePeople[1]);
console.log(favoritePeople[2]);

// #### Array-TS-Level-1_3

console.log(bucketList.length);
console.log(luckyNumbers.length);
console.log(favoritePeople.length);

// #### Array-TS-Level-1_4 - push()

bucketList.push("Port Moresby", "Kathmandu");
console.log(bucketList);

luckyNumbers.push(101, 666);
console.log(luckyNumbers);

favoritePeople.push("Chief", "Markus");
console.log(favoritePeople);

// #### Array-TS-Level-1_5 - pop()

const removedCityEnd = bucketList.pop();
console.log("Removed: ", removedCityEnd);
console.log(bucketList);

const removedNumberEnd = luckyNumbers.pop();
console.log("Removed: ", removedNumberEnd);
console.log(luckyNumbers);

const removedPeopleEnd = favoritePeople.pop();
console.log("Removed: ", removedPeopleEnd);
console.log(favoritePeople);

// #### Array-TS-Level-1_6 - shift()

const removedCityStart = bucketList.shift();
console.log("Removed: ", removedCityStart);
console.log(bucketList);

const removedNumberStart = luckyNumbers.shift();
console.log("Removed: ", removedNumberStart);
console.log(luckyNumbers);

const removedPeopleStart = favoritePeople.shift();
console.log("Removed: ", removedPeopleStart);
console.log(favoritePeople);

// #### Array-TS-Level-1_7 - unshift()

const addBucketListStart = bucketList.unshift("Paris", "Barcelona");
// console.log("Added: ", addBucketListStart);  -> output in console is a number = shows new length of array
console.log(bucketList);

// #### Array-TS-Level-1_8 - slice()

const favDestinations: string[] = [
  "London",
  "Amsterdam",
  "Berliln",
  "Köln",
  "Bangkok",
  "Koh Phangan",
  "Brüssel",
  "Whitby",
];
console.log(favDestinations);
const removeCrap = favDestinations.slice(2, 4);
console.log(removeCrap);
console.log(favDestinations);

// #### Array-TS-Level-1_9 - push() / pop() & shift() / unshift()

const variousNumbers: number[] = [23, 54, 75];
console.log(variousNumbers);

const addFiveEnd = variousNumbers.push(12, 67, 93, 7, 50324);
console.log(variousNumbers);

const addFiveStart = variousNumbers.unshift(295, 8, 13, 99, 4);
console.log(variousNumbers);

// - pop() only removes one item, as we don't know how to use loops by now, pop() needs to be used twice to remove two numbers of the array
let removeTwoEnd = variousNumbers.pop();
removeTwoEnd = variousNumbers.pop();
console.log(variousNumbers);

// - same with shift()
let removeTwoStart = variousNumbers.shift();
removeTwoStart = variousNumbers.shift();
console.log(variousNumbers);

// #### Array-TS-Level-1_10 - split()

const futuramaQuote: string =
  "It's okay, Bender. I like cooking too. Oh, you're a dollar naughtier than most. My fellow Earthicans, as I have explained in my book 'Earth in the Balance', and the much more popular 'Harry Potter and the Balance of Earth', we need to defend our planet against pollution. Also dark wizards.";

const wordSplit = futuramaQuote.split(" ");
console.log(wordSplit);

const sentenceSplit = futuramaQuote.split(".");
console.log(sentenceSplit);

const letterSplit = futuramaQuote.split("");
console.log(letterSplit);
