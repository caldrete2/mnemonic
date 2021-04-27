var express = require('express')
var router = express.Router()
var pool = require('./db')

router.get('/api/get/allusers', (req, res, next) => {
	pool.query(`SELECT * FROM users ORDER BY user_id ASC`, 
		(q_err, q_res) => {
			res.json(q_res.rows)	
		})
})

module.exports = router
