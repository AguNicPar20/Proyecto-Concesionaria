const config = require("../config/config")
module.exports = function(sequileze, dataTypes) {
 let alias = "Vehiculos";

 let cols = {
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    categoria:{
        type: dataTypes.INTEGER,
        primaryKey: true
    },
    name: {
        type: dataTypes.STRING
    }
}
let config = {
    tableName: "vehiculos",
    timestamps: false
}
 
 let vehiculos = sequileze.define (alias, cols, config);


 return vehiculos;
}
   