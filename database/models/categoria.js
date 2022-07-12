const config = require("../config/config")
module.exports = function(sequileze, dataTypes) {
 let alias = "Categorias";

 let cols = {
    id:{
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    nombre: {
        type: dataTypes.STRING
    }
}
let config = {
    tableName: "categorias",
    timestamps: false
}
 
 let Categorias = sequileze.define (alias, cols, config);


 return Categorias;
}
   