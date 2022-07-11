const db = require ("../database/models");
const path= require ("path");

let controllers = {
 vehiculoList: function (req, res) {
    db.vehiculos.findAll()
    .then(function(vehiculos){
        return res.render ("vehiculoList", {vehiculos:vehiculos});
    })
    
 },
 venderVehiculo: function(req, res, next){
   res.render("venderVehiculo",{
      title: "Vender"
   })
 }
};

module.exports = controllers;