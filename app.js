const path = require('path');
const express = require('express');
const app = express();
var indexRouter = require('./routes/index');
var vehiculosRouter = require('./routes/vehiculos');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use("/vehiculos", vehiculosRouter);





app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor funcionando');
});

