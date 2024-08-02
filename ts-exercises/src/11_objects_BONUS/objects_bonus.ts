type PeriodActiveTwo = {
  start: number;
  end: number | string;
  extra?: number;
};

type SingerTwo = {
  name: string;
  country: string;
  period_active: PeriodActiveTwo;
  genre: string;
};

const singersTwo: SingerTwo[] = [
  {
    name: "The Beatles",
    country: "United Kingdom",
    period_active: { start: 1960, end: 1970 },
    genre: "Rock / Pop",
  },
  {
    name: "Elvis Presley",
    country: "United States",
    period_active: { start: 1954, end: 1977 },
    genre: "Rock and roll",
  },
  {
    name: "Michael Jackson",
    country: "United States",
    period_active: { start: 1964, end: 2009 },
    genre: "Pop / Rock / Dance / Soul / R&B",
  },
  {
    name: "Elton John",
    country: "United Kingdom",
    period_active: { start: 1964, end: "present" },
    genre: "Pop / Rock",
  },
  {
    name: "Madonna",
    country: "United States",
    period_active: { start: 1979, end: "present" },
    genre: "Pop / Dance / Electronica",
  },
  {
    name: "Led Zeppelin",
    country: "United Kingdom",
    period_active: { start: 1968, end: 1980 },
    genre: "Hard rock / Blues rock / Folk rock",
  },
  {
    name: "Rihanna",
    country: "United States",
    period_active: { start: 2005, end: "present" },
    genre: "R&B / Pop / Dance / Hip-hop",
  },
  {
    name: "Pink Floyd",
    country: "United Kingdom",
    period_active: { start: 1965, end: 1996, extra: 2014 },
    genre: "Progressive rock / Psychedelic rock",
  },
];

const searchButton = document.getElementById(
  "search-button"
) as HTMLButtonElement;
const searchInput = document.getElementById("searchInput") as HTMLInputElement;
const singersTableBody = document.getElementById(
  "singersTableBody"
) as HTMLTableSectionElement;

function displaySingers(singers: SingerTwo[]): void {
  singersTableBody.textContent = "";

  singers.forEach((singer) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = singer.name;

    const countryCell = document.createElement("td");
    countryCell.textContent = singer.country;

    const periodCell = document.createElement("td");
    periodCell.textContent = `${singer.period_active.start} - ${singer.period_active.end}`;

    const genreCell = document.createElement("td");
    genreCell.textContent = singer.genre;

    row.appendChild(nameCell);
    row.appendChild(countryCell);
    row.appendChild(periodCell);
    row.appendChild(genreCell);

    singersTableBody.appendChild(row);
  });
}

function searchSingers(): void {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredSingers = singersTwo.filter(
    (singer) =>
      singer.name.toLowerCase().includes(searchTerm) ||
      singer.country.toLowerCase().includes(searchTerm) ||
      singer.genre.toLowerCase().includes(searchTerm)
  );
  displaySingers(filteredSingers);
}
searchButton.addEventListener("click", searchSingers);
displaySingers(singersTwo);
