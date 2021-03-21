import 'reflect-metadata';
import Koa from 'koa';
import { router } from './rotures';
import { __prod__ } from './constants';
import { createConnection } from 'typeorm';

(async function () {
  await createConnection();

  const app = new Koa();

  app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
    try {
      await next();
    } catch (error) {
      console.log('??/');
      ctx.status = error.statusCode || error.status;
      error.status = ctx.status;
      ctx.body = { error };
      ctx.app.emit('error', error, ctx);
    }
  });

  app.use(router.routes());

  app.on('error', (err, ctx) => {
    console.log('server error', err, ctx);
  });

  app.listen(3000);

  console.log('koa listening to you on 3000');
})();
