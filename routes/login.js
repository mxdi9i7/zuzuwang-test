var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
var db;

MongoClient.connect('mongodb://localhost:3310/db', (err, connection) => {
	if (err) {
		console.log(err)
	}
	db = connection
})

/* GET home page. */
router


.get('/login', function(req, res, next) {
	db.collection('users')
		.find()
		.toArray((err, users)=> {
			res.render('login', {
			  	title: "登录",
			  	users,
			   partials: {
			   	header: './partials/header',
			  	footer: './partials/footer'
			  }
			})
		})
	})
module.exports = router
