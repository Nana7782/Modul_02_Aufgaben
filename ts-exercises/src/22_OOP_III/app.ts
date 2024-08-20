import Alien from "./classes/Alien";
import Beverage from "./classes/Beverage";
import { Coffee, CoffeeType } from "./classes/Coffee";
import Song from "./classes/Song";
import { Tea, TeaFlavor } from "./classes/Tea";
import Vocabulary from "./classes/Vocabulary";

// ##### OOP-Class-TS-Level-1_4
console.log("%c OOP-Class-TS-Level-1_4 ", "background: white; color: green");

const alien1 = new Alien("Zorblax", "neon-green");
alien1.planet = "Glimora";
alien1.galaxy = "Andromeda";

const alien2 = new Alien("Fintar", "blue with purple stripes");
alien2.planet = "Xylox";
alien2.galaxy = "Milkyway";

const alien3 = new Alien("Quorath", "red with golden dots");
alien3.planet = "Vexilon";
alien3.galaxy = "Triangulum";

console.log(alien1);
console.log(alien2);
console.log(alien3);

// ##### OOP-Class-TS-Level-1_5
console.log("%c OOP-Class-TS-Level-1_5 ", "background: white; color: green");

const song1 = new Song("Vagabonds", "New Model Army");
song1._durationSeconds = 325;

console.log(song1.getInfo());

const song2 = new Song("Call the Ships to Port", "Covenant");
song2._durationSeconds = 262;

console.log(song2.getInfo());

class SongWithUnknownArtist extends Song {
  constructor(title: string) {
    super(title, "Unknown");
  }

  public setArtist(name: string): void {
    this._artist = name;
  }
}

const unknownArtist = new SongWithUnknownArtist("Paint it black");
unknownArtist._durationSeconds = 227;

console.log(unknownArtist.getInfo());

unknownArtist.setArtist("The Rolling Stones");
console.log(unknownArtist.getInfo());

// ##### OOP-Class-TS-Level-1_10
console.log("%c OOP-Class-TS-Level-1_10 ", "background: white; color: green");

const beverage1 = new Beverage("Water", 1.0);
console.log(beverage1);
const beverage2 = new Beverage("Soda", 1.5);
console.log(beverage2);

const coffee1 = new Coffee("Espresso", 2.5, CoffeeType.Espresso);
console.log(coffee1);
const coffee2 = new Coffee("Latte", 3.0, CoffeeType.Latte);
console.log(coffee2);
const coffee3 = new Coffee("Cappuccino", 3.5, CoffeeType.Cappuccino);
console.log(coffee3);
const coffee4 = new Coffee("Americano", 2.8, CoffeeType.Americano);
console.log(coffee4);

const tea1 = new Tea("Green Tea", 2.0, TeaFlavor.Green);
console.log(tea1);
const tea2 = new Tea("Black Tea", 2.2, TeaFlavor.Black);
console.log(tea2);
const tea3 = new Tea("Chai Tea", 2.5, TeaFlavor.Chai);
console.log(tea3);
const tea4 = new Tea("Peppermint Tea", 2.3, TeaFlavor.Peppermint);
console.log(tea4);

// ##### OOP-Class-TS-Level-2_5
console.log("%c OOP-Class-TS-Level-2_5 ", "background: white; color: green");

// const englishVocabulary = new Vocabulary(["hello"]);
// englishVocabulary.addWord("hello");
