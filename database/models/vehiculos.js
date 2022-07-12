const config = require("../config/config")
module.exports = function(sequileze, dataTypes) {
 let alias = "Vehiculos";

 let cols = {
    id:{
        type: dataTypes.BIGINT(10),
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: dataTypes.STRING
    },
    descripcion: {
        type: dataTypes.TEXT
    },
    precio: {
        type: dataTypes.INTEGER
    },
    imagen: {
        type: dataTypes.STRING
    },
    categoria_id:{
        type: dataTypes.BIGINT(10),
        primaryKey: true
    },
   

}
let config = {
    tableName: "vehiculos",
    timestamps: false
}
 
 let Vehiculos = sequileze.define (alias, cols, config);


 return Vehiculos;
}
   