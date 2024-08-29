const loremIpsumText: string =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";

function generateLoremIpsum(numberOfWords: number): Promise<string[]> {
  return new Promise((resolve, reject) => {
    if (numberOfWords > 50) {
      reject("Number of words cannot exceed 50");
      return;
    }
    const words = loremIpsumText.split(" ").filter((word) => word.length > 0);
    const selectedWords = words.slice(0, numberOfWords);
    resolve(selectedWords);
  });
}

generateLoremIpsum(30) //-hier beliebigen wert verwenden
  .then((words) => {
    console.log(words);
    const upperCaseWords = words.map((word) => word.toUpperCase());
    return upperCaseWords;
  })
  .then((upperCaseWords) => {
    console.log(upperCaseWords);
    const filteredWords = upperCaseWords.map((word) => {
      let newWord = "";
      for (let char of word) {
        if (char !== "L" && char !== "T" && char !== "U") {
          newWord += char;
        }
      }
      return newWord;
    });
    return filteredWords;
  })
  .then((filteredWords) => {
    console.log(filteredWords);
    const shortWords = filteredWords.filter((word) => word.length <= 8);
    return shortWords;
  })
  .then((shortWords) => {
    console.log(shortWords);
    const resultString = shortWords.join(" ");
    console.log(resultString);
  })
  .catch((error) => {
    console.error(error);
  });
