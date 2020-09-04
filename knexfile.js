// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      database: 'buid_db',
      user: 'root',
      password: 'th200182'
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  }

}
