const path= require ("path");
const db = require("../database/models")

let controllers = {
 vehiculoList: function (req, res) {
    db.Vehiculos.findAll()
    .then(function(vehiculos){
        return res.render ("vehiculoList.ejs", {vehiculos});
    })
    
 },
 venderVehiculo: function(req, res, next){
   db.Categorias.findAll().then((categorias)=>{
      res.render("venderVehiculo",{
         categorias
      })
   })
 },
 detalleVehiculo: (req, res) => {
   db.Vehiculos.findByPk(req.params.id)
   .then(vehiculo => {res.render("detalleVehiculo", {vehiculo})})   

  },
 guardarVehiculo: function (req, res){
   if (req.file === undefined) {
      return res.render('index.ejs');
  }
  console.log(req.file);
  let vehiculo = db.Vehiculos.create({
      nombre : req.body.nombre,
      descripcion : req.body.descripcion,
      precio  : req.body.precio,
      imagen : req.file.filename,
      categoria_id : req.body.categoria,
  })
 res.render("index")}
};

module.exports = controllers;