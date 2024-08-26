function generateLottoNumber(): number {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  if (randomNumber > 49) {
    throw new Error(`Number ${randomNumber} ist larger than 49. ERROR`);
  }
  return randomNumber;
}

const lottoResults: number[] = [];

while (lottoResults.length < 7) {
  try {
    const number = generateLottoNumber();
    if (!lottoResults.includes(number)) {
      lottoResults.push(number);
    }
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error(errorMessage);
  }
}

console.log("Generated Lotto Numbers:", lottoResults);
