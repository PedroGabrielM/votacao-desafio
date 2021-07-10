// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: "desafio_banco",
      user: "postgres",
      password: "123"
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/scr/database/migrations`
    }
  }
};
