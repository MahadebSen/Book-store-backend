import { Schema, model } from 'mongoose';
import { BookModelType, IBook } from './books.interface';

const bookSchema = new Schema<IBook, BookModelType>({
  title: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  genre: { type: String, required: true },
  publication: { type: Number, required: true },
  rating: { type: Number },
  comments: { type: [String] },
});

export const BookModel = model<IBook, BookModelType>('Book', bookSchema);
