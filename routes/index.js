var express = require('express');
var router = express.Router();

var importantModule = require('../logic/important');


/* GET home page. */
router.get('/', function(req, res, next) {  // eslint-disable-line no-unused-vars
	var resultFirst = importantModule.importantCalculationAdd(2,3);
	var resultSecond = importantModule.importantCalculationMultiply(2,3);
	res.render('index', { resultAdd: resultFirst,
		resultMultiply: resultSecond
	});

});

module.exports = router;

