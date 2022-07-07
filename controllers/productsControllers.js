const path = require("path");

const controllers = {

    productsList:  function(req, res, next) {
      res.render('productsList', {
        titulo: "GarageSN"
      })
    },
    productsDetail:  function(req, res, next) {
        res.render('productsDetail', {
          titulo: "GarageSN"
        })
      },
      
  }
  module.exports = controllers;