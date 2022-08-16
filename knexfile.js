// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      user: 'root',
      password: 'password',
      database: 'lendsqr',
    }
  },
  test: {
    client: 'mysql2',
    connection: {
      user: 'root',
      password: 'password',
      database: 'lendsqr_test',
    }
  },
};
