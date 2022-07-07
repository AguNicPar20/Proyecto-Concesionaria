var express = require('express');
var router = express.Router();

var controllers = require ("../controllers/productsControllers");


router.get('/products', controllers.productsList);
router.get("/productsDetail", controllers.productsDetail)
module.exports = router;