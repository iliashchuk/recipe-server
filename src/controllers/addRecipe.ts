import Koa from 'koa';
import { Book } from '../entities/Book';
import { getConnection } from 'typeorm';

export const addRecipe: Koa.Middleware = async (ctx, next) => {
  const bookRepository = await getConnection().manager.getRepository(Book);

  const book = bookRepository.create(ctx.request.body);

  console.log(book);

  bookRepository.save(book);

  next();
};
