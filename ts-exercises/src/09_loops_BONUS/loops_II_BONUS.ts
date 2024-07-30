// ##### Loops-TS-Level-3_7
console.log("%c Loops-Level-3_7 ", "background: white; color: green");

function rot13Encrypt(text: string): string {
  const allGermanLetters: string[] = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  let result: string = "";
  text = text.toUpperCase();

  for (const character of text) {
    const index: number = allGermanLetters.indexOf(character);
    if (index !== -1) {
      const newIndex: number = (index + 13) % 26;

      result += allGermanLetters[newIndex];
    } else if (character === " ") {
      result += " ";
    } else {
      continue;
    }
  }
  return result;
}
console.log(rot13Encrypt("Hello World"));
console.log(rot13Encrypt("Ich sehe was, dass du nicht siehst und das ist rot"));
