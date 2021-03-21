import Koa from 'koa';
import { Book } from '../entities/Book';
import { getConnection } from 'typeorm';

export const getRecipes: Koa.Middleware = async (ctx) => {
  ctx.body = await getConnection().manager.find(Book);
};
