const entitiesDirname = `${__dirname}/dist/entities/*{.ts,.js}`;

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
