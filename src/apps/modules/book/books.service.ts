import ApiError from '../../../errors/apiErrors';
import { IBook } from './books.interface';
import { BookModel } from './books.model';

const createBook = async (payload: IBook): Promise<IBook | null> => {
  const result = await BookModel.create(payload);

  if (!result) {
    throw new ApiError(400, 'Failed to create semester');
  } else {
    return result;
  }
};

const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await BookModel.findById(id);

  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<IBook>
): Promise<IBook | null> => {
  const result = await BookModel.findByIdAndUpdate({ _id: id }, payload, {
    new: true,
  });

  return result;
};

const deleteBook = async (id: string) => {
  const result = BookModel.findByIdAndDelete({ _id: id });

  return result;
};

export const BookServices = {
  createBook,
  getSingleBook,
  updateBook,
  deleteBook,
};
