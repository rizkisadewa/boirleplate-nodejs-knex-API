// Update with your config settings.

module.exports = {

  development: {
      client: 'postgresql',
      connection: {
          host: 'localhost',
          user: 'postgres',
          password: '1234',
          port: 5432,
          database: 'cjs-web-store',
          timezone: 'utc'
      },
      pool: {
          min: 2,
          max: 10,
      },
      migrations: {
          tableName: 'knex_migrations'
      }
  },

  staging: {
    client: 'postgresql',
    connection: {
        host: 'localhost',
        user: 'postgres',
        password: '1234',
        port: 5432,
        database: 'test-cjs-web-store',
        timezone: 'utc'
    },
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
