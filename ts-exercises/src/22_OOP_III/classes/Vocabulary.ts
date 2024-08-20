class Vocabulary {
  private _words: string[] = [];
  protected _language: string = "English";

  constructor(words: string[], language: string) {
    this._words = words;
    this._language = language;
  }

  public addWord(word: string): void {
    if (word.length > 0 && this._words.includes(word)) {
      this._words.push(word);
    } else {
      console.error(
        `The word “${word}” cannot be added. It must contain at least one letter and must not already exist.`
      );
    }
  }

  public displayAll(): void {
    console.log(`Language: ${this._language}`);
    console.log(`Words: ${this._words.join("")}`);
  }
}

export default Vocabulary;
