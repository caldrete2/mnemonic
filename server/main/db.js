const { Pool } = require('pg')

const pool = new Pool({
  user: 'my_user',
  host: 'localhost',
  database: 'mnemonic',
  password: 'root',
  post: 5432
})

module.exports = pool
