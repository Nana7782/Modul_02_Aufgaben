class Singer {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sing(): string {
    return "";
  }
  letsSing(): string {
    let emoji: string;

    switch (this.constructor) {
      case FreddieMercury:
        emoji = "👨🏻‍🦱";
        break;
      case MarilynManson:
        emoji = "👨🏻‍🎤";
        break;
      case JoanJett:
        emoji = "👱🏻‍♀️";
        break;
      case JohnyCash:
        emoji = "👨🏽‍🌾";
        break;
      default:
        return "Unknown Singer";
    }

    return `${emoji} "${this.name}" sings "${this.sing()}"`;
  }
}

class FreddieMercury extends Singer {
  constructor(name: string) {
    super(name);
  }
  sing(): string {
    return "We are the Champions";
  }
}

class MarilynManson extends Singer {
  constructor(name: string) {
    super(name);
  }
  sing(): string {
    return "The Beautifuly people";
  }
}

class JoanJett extends Singer {
  constructor(name: string) {
    super(name);
  }
  sing(): string {
    return "I love Rock n Roll";
  }
}

class JohnyCash extends Singer {
  constructor(name: string) {
    super(name);
  }
  sing(): string {
    return "I hurt myself today";
  }
}

export { Singer, FreddieMercury, MarilynManson, JoanJett, JohnyCash };
