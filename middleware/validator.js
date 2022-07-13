const {body}= require("express-validator");

const productsValidator=[
    body("nombre")
    .notEmpty()
    .withMessage("Colocar nombre de producto")
    .isLength({min:15})
    .withMessage("Colocar más de 15 caracteres"),

    body("detalle")
    .notEmpty()
    .withMessage("Colocar detalle de producto")
    .isLength({min:30})
    .withMessage("Colocar más de 30 caracteres"),

    body("precio")
    .notEmpty()
    .withMessage("Colocar precio de producto"),

    body("categoria")
    .notEmpty()
    .withMessage("Colocar categoria de producto")
    .isLength({min:5})
    .withMessage("Colocar más de 5 caracteres"),
]

module.exports=productsValidator
