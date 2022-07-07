const path = require("path");

const controllers = {

    index:  function(req, res, next) {
      res.render('index', {
        titulo: "GarageSN"
      })
    },
  }
  module.exports = controllers;