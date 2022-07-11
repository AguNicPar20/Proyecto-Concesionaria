const express = require ("express");
var router = express.Router();
const controllers = require ("../controllers/vehiculosControllers")
const multer = require ("multer");
//creacion

router.get("/vehiculos", controllers.vehiculoList);
router.get("/venderVehiculo", controllers.venderVehiculo);
module.exports = router;
