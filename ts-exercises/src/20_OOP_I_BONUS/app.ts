import Actor from "./classes/Actor";
import Episode from "./classes/Episode";
import Series from "./classes/Series";

// Creating Actors
// -Breaking Bad
const actor1 = new Actor("Bryan", "Cranston", new Date("1956-03-07"), "Male");
const actor2 = new Actor("Aaron", "Paul", new Date("1979-08-27"), "Male");
const actor3 = new Actor("Anna", "Gunn", new Date("1968-04-11"), "Female");

// -Suits
const actor4 = new Actor("Gabriel", "Macht", new Date("1981-01-22"), "Male");
const actor5 = new Actor("Patrick", "J. Adams", new Date("1981-08-27"), "Male");
const actor6 = new Actor("Meghan", "Markle", new Date("1981-08-04"), "Female");

// - American Horror Stories
const actor7 = new Actor("Sarah", "Paulson", new Date("1974-12-17"), "Female");
const actor8 = new Actor("Evan", "Peters", new Date("1987-01-20"), "Male");
const actor9 = new Actor("Jessica", "Lange", new Date("1949-04-20"), "Female");

// Creating episodes
// - Breaking Bad
const episode1 = new Episode("Pilot", 58, "The one where it all begins.", [
  actor1,
  actor2,
]);
const episode2 = new Episode(
  "Cat’s in the Bag...",
  48,
  "The one where they deal with the aftermath.",
  [actor1, actor3]
);

// - Suits
const episode3 = new Episode("Pilot", 44, "The one where Harvey hires Mike.", [
  actor4,
  actor5,
]);
const episode4 = new Episode(
  "Errors and Omissions",
  44,
  "The one where Mike makes a mistake.",
  [actor4, actor5, actor6]
);

//   - American Horror Stories
const episode5 = new Episode(
  "Pilot",
  60,
  "The one where the family moves into a haunted house.",
  [actor7, actor8]
);
const episode6 = new Episode(
  "Murder House",
  60,
  "The one where the secrets of the house are revealed.",
  [actor7, actor8, actor9]
);

//Creating Series
// - Breaking Bad
const series1 = new Series(
  "Breaking Bad",
  "A high school chemistry teacher turned methamphetamine manufacturer",
  2008,
  [episode1, episode2],
  2013
);

// - Suits
const series2 = new Series(
  "Suits",
  "A legal drama about a college drop-out who starts working as a law associate for a successful lawyer.",
  2011,
  [episode3, episode4],
  2019
);

// - American Horror Stories
const series3 = new Series(
  "American Horror Stories",
  "An anthology horror series that explores different horror themes each season.",
  2021,
  [episode5, episode6],
  2022
);

//   ******************************* //

function printSeriesInfo(series: Series) {
  console.log(`Title: ${series._title}`);
  console.log(`Description: ${series._description}`);
  console.log(`Start Year: ${series._startYear}`);
  console.log(`End Year: ${series._endYear}`);
  console.log(`Number of Episodes: ${series._episodes.length}`);

  series._episodes.forEach((episode) => {
    episode._actors.forEach((actor) => {
      console.log("Actor:");
      console.log(`- ${actor._firstName} ${actor._lastName}`);
      console.log(`  - Birthday: ${actor._birthday.toDateString()}`);
      console.log(`  - Gender: ${actor._gender}`);
    });
  });
}

printSeriesInfo(series1);
printSeriesInfo(series2);
printSeriesInfo(series3);
