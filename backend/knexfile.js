// Update with your config settings.
const dotenv = require('dotenv')
dotenv.config()
module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './src/database/db.sqlite3'
  //   },
  //   migrations:{
  //     directory:'./src/database/migrations'
  //   },
  //   useNullAsDefault: true
  // },


    client: 'mysql',
    connection: {
      host:process.env.SERVER_HOST,
      database: process.env.DB_NAME,
      user:     process.env.DB_USER,
      password: process.env.DB_PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory:'./src/database/migrations'
    }


  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }

};
