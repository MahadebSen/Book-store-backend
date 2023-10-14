import { Model } from 'mongoose';

export type IBook = {
  title: string;
  author: string;
  image: string;
  price: number;
  genre: string;
  publication: number;
  rating: number;
  comments: string[];
};

export type BookModelType = Model<IBook, Record<string, unknown>>;

export type IBookFilters = {
  searchTerm?: string;
  genre?: string;
  publication?: number;
};
