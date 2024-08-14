import Actor from "./classes/Actor";
import Episode from "./classes/Episode";
import Series from "./classes/Series";

// Creating Actors
const actor1 = new Actor("Bryan", "Cranston", new Date("1956-03-07"), "Male");
const actor2 = new Actor("Aaron", "Paul", new Date("1979-08-27"), "Male");
const actor3 = new Actor("Anna", "Gunn", new Date("1968-04-11"), "Female");

// Creating episodes
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

//Creating Series
const series1 = new Series(
  "Breaking Bad",
  "A high school chemistry teacher turned methamphetamine manufacturer",
  2008,
  [episode1, episode2],
  2013
);

function printSeriesInfo(series: Series) {
  console.log(`Title: ${series._title}`);
  console.log(`Description: ${series._description}`);
  console.log(`Start Year: ${series._startYear}`);
  console.log(`End Year: ${series._endYear}`);
  console.log(`Number of Episodes: ${series._episodes.length}`);

  series._episodes.forEach((episode) => {
    episode._actors.forEach((actor) => {
      console.log(`- ${actor._firstName} ${actor._lastName}`);
      console.log(`  - Birthday: ${actor._birthday.toDateString()}`);
      console.log(`  - Gender: ${actor._gender}`);
    });
  });
}

printSeriesInfo(series1);
