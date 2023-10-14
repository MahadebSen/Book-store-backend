import { z } from 'zod';

const createBookZodSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'title is required' }),
    author: z.string({ required_error: 'author is required' }),
    image: z.string({ required_error: 'image is required' }),
    price: z.number({ required_error: 'price is required' }),
    genre: z.string({ required_error: 'genre is required' }),
    publication: z.number({ required_error: 'publication year is required' }),
    rating: z.number().optional(),
    comments: z.string().optional(),
  }),
});

const updateBookZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    author: z.string().optional(),
    image: z.string().optional(),
    price: z.number().optional(),
    genre: z.string().optional(),
    publication: z.number().optional(),
    rating: z.number().optional(),
    comments: z.string().optional(),
  }),
});

export const BookValidation = {
  createBookZodSchema,
  updateBookZodSchema,
};
