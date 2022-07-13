const express = require("express");
var router = express.Router();
const controllers = require("../controllers/vehiculosControllers")
const multer = require('multer');
const path = require("path");
const vehiculoValidator = require("../middleware/validator");
const storage = multer.diskStorage({
	destination: (req,file,callback) => {
		callback(null, path.join(__dirname,'../public/imagenVehiculo'))
	},
	filename: (req,file,callback) => {
		callback(null,'image-' + Date.now() + path.extname(file.originalname))
	} 
});
const upload = multer({storage});
//creacion

router.get("/vehiculoList", controllers.vehiculoList);
router.get("/detalleVehiculo/:id", controllers.detalleVehiculo);
router.get("/venderVehiculo",vehiculoValidator, controllers.venderVehiculo);
router.get("/actualizarVehiculo/:id",vehiculoValidator, controllers.actualizarVehiculo);
router.post("/newVehiculo", upload.single("imagenvehiculo"), vehiculoValidator, controllers.guardarVehiculo);
router.post("/updateVehiculo/:id", upload.single("imagenvehiculo"), vehiculoValidator, controllers.updateVehiculo);
module.exports = router;
