// - Utility-Types-TS-Level-1_1

export interface IBooks {
  author: string;
  name: string;
  publishingYear: string;
  shortDescription?: string;
  numberOfPages: number;
}

export interface IPartialBooks extends Partial<IBooks> {}

// - 1_2

export interface IBasicBooks
  extends Omit<IBooks, "publishingYear" | "shortDescription"> {}

// - 1_3

export interface IBookDescriptions
  extends Pick<IBooks, "name" | "shortDescription"> {}

// - 1_4

export interface IRequiredBooks extends Required<IBooks> {}

// - 1_5

export interface IReadOnlyBooks extends Readonly<IBooks> {}
