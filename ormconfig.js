const entitiesDirname = `${__dirname}/${
  process.env.NODE_ENV !== 'production' ? 'dist' : 'src'
}/entities/*{.ts,.js}`;

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'recipeuser',
  password: '666666',
  database: 'recipedb',
  entities: [entitiesDirname],
  synchronize: true,
  logging: true,
};
