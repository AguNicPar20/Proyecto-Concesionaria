var express = require('express');
var router = express.Router();

var controllers = require ("../controllers/indexControllers");


router.get('/', controllers.index);

module.exports = router;
