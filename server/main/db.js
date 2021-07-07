const { Pool } = require('pg')

var connString = (process.env.PORT)? 
	process.env.DATABASE_URL : 'postgresql://my_user:root@localhost:5432/mnemonic'

const pool = new Pool({
	connectionString: connString,
	ssl: { rejectUnauthorized: false }
})

module.exports = pool
