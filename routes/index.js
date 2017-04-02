var express = require('express');
var router = express.Router();

/* GET home page. */
router


.get('/', function(req, res, next) {
		  res.render('index', {
		  	title: "123",
		   partials: {
		   	header: './partials/header',
		  	footer: './partials/footer'
		  }
		})
	})
module.exports = router
