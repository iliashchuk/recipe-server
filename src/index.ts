import 'reflect-metadata';

import { __prod__ } from './constants';
import { createConnection } from 'typeorm';
import { Book } from './entities/Book';

const main = async () => {
  const connection = await createConnection();

  // const book = new Book();
  // book.author = 'Zizek';
  // book.title = 'Socialism is when the government does stuff';
  // book.isPublished = true;
  // book.description = 'And the more stuff it does, the more socialism it is.';

  // connection.manager.save<Book>(book);

  const books = await connection.manager.find(Book);

  console.log(books);

  console.log('yes');
};

main().catch((e) => console.log(e));
