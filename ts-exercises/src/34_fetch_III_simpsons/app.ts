import IQuotes from "./interfaces/IQuotes";
import "./assets/css/style.css";

const BASE_URL = "https://thesimpsonsquoteapi.glitch.me/";
const RANDOM_URL = `${BASE_URL}/quotes`;
// const LISA_URL = `${BASE_URL}/quotes?character=lisa%20simpson`;
// const BART_URL = `${BASE_URL}/quotes?character=bart%20simpson`;
const HOMER_URL = `${BASE_URL}/quotes?character=homer%20simpson`;
// const MARGE_URL = `${BASE_URL}/quotes?character=marge%20simpson`;

// ! ⬆️ Lisa, Bart & Marge only have 2-3 quotes each, so the buttons don't make much sense ⬇️

const loadingIndicator = document.querySelector(".loader") as HTMLSpanElement;
const randomBtn = document.getElementById("random") as HTMLButtonElement;
// const lisaBtn = document.getElementById("lisa") as HTMLButtonElement;
// const bartBtn = document.getElementById("bart") as HTMLButtonElement;
const homerBtn = document.getElementById("homer") as HTMLButtonElement;
// const margeBtn = document.getElementById("marge") as HTMLButtonElement;
const quoteOutput = document.getElementById("quotes") as HTMLDivElement;

loadingIndicator.style.display = "none";

let quotesArray: IQuotes[] = [];

function fetchQuotes(url: string) {
  loadingIndicator.style.display = "block";

  fetch(url)
    .then((resp: Response) => {
      if (!resp.ok) {
        throw new Error("Couldn't fetch data");
      }
      return resp.json();
    })
    .then((quotes: IQuotes[]) => {
      quotesArray.push(...quotes);

      const randomIndex = Math.floor(Math.random() * quotesArray.length);
      const quote = quotesArray[randomIndex];

      quoteOutput.innerHTML += `
            <div class="quote-item">
              <img src="${quote.image}" alt="Character Image"/>
              <p class="quote">"${quote.quote}"</p>
              <p class="character">${quote.character}</p>
            </div>
          `;
    })
    .catch((error) => {
      console.error("An Error occurred while fetching data:", error);
      quoteOutput.innerHTML = "An Error occurred, please try again later.";
    })
    .finally(() => {
      loadingIndicator.style.display = "none";
    });
}

randomBtn.addEventListener("click", () => {
  fetchQuotes(RANDOM_URL);
});

homerBtn.addEventListener("click", () => {
  fetchQuotes(HOMER_URL);
});
