const express = require ("express");
var router = express.Router();
const controllers = require ("../controllers/vehiculosControllers")
const multer = require('multer');
const path = require ("path");
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

router.get("/", controllers.vehiculoList);
router.get("/detalleVehiculo/:id", controllers.detalleVehiculo);
router.get("/venderVehiculo", controllers.venderVehiculo);
router.post ("/newVehiculo", upload.single("imagenvehiculo"), controllers.guardarVehiculo);
module.exports = router;
