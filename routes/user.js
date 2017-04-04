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


.get('/user', function(req, res, next) {
	db.collection('users')
		.find()
		.toArray((err, users)=> {
			res.render('user', {
			  	title: "用户主页",
			  	users,
			  	message: 'this is user page',
			   partials: {
			   	header: './partials/header',
			  	footer: './partials/footer'
			  }
			})
		})
		  
	})
module.exports = router
