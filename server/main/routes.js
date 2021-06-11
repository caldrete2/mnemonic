var express = require('express')
var router = express.Router()
var pool = require('./db')

router.get('/api/get/allcontacts', (req, res) => {
	pool.query(`SELECT  u.*, 
						a.addr_id,
						a.street,
						a.city,
						a.state,
						a.zipcode
				FROM users AS u JOIN addr AS a 
				ON u.user_id=a.user_id
				ORDER BY u.name ASC`, 
		(q_err, q_res) => {
			res.json(q_res.rows)	
		})
})

router.post('/api/post/updatecontact', (req, res) => {
	const u_values = [ req.body.ukey,
					   req.body.name,
					   req.body.email,
					   req.body.phone  ]
	
	const a_values = [ req.body.akey,
					   req.body.street,
					   req.body.zip,
					   req.body.state ]
	
	pool.query(`UPDATE users 
				SET name=$2, email=$3, phone=$4
				WHERE user_id=$1`,
			 u_values, (q_err, q_res) => {
				console.log(q_res)
				console.log(q_err)	
			 })

	pool.query(`UPDATE addr
				SET street=$2, zipcode=$3, state=$4
				WHERE addr_id=$1`, 
			a_values, (q_err, q_res) => {
				console.log(q_res)
				console.log(q_err)	
			})
})

router.post('/api/post/newcontact', (req, res) => {
	const u_text = 'INSERT INTO users(name,email,phone) VALUES($1,$2,$3) RETURNING user_id'
	const u_values =  [req.body.name, req.body.email, req.body.phone]
						
	pool
		.query(u_text, u_values)
		.then(res => {
			const a_values = [res.rows[0].user_id, req.body.street, req.body.city, req.body.zipcode, req.body.state]
			const a_text = 'INSERT INTO addr(user_id,street,city,zipcode,state) VALUES($1,$2,$3,$4,$5)'
			
			pool
				.query(a_text, a_values)
				.then(q_res => console.log(q_res))
				.catch(err => console.error(err.stack))
		})
		.catch(e => console.error(e.stack))
})

router.delete('/api/delete/contact', (req, res) => {
	const a_text = 'DELETE FROM addr WHERE user_id=$1'	
	const value = [req.body.ukey]

	pool
		.query(a_text, value)
		.then(() => {
			const u_text = 'DELETE FROM users WHERE user_id=$1'
			pool
				.query(u_text, value)
				.then(res => console.log(res))
				.catch((err) => console.error(err.stack))
		})
		.catch((e) => console.error(e.stack))
})

module.exports = router
