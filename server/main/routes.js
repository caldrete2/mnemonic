var express = require('express')
var router = express.Router()
var pool = require('./db')

router.get('/api/get/allcontacts', (req, res, next) => {
	pool.query(`SELECT * FROM users JOIN addr ON users.name = addr.owner;`, 
		(q_err, q_res) => {
			res.json(q_res.rows)	
		})
})

module.exports = router
