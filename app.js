const path = require('path');
const express = require('express');
const app = express();

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products')


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/products', productsRouter)






app.listen(process.env.PORT || 3000, () => {
  console.log('Servidor funcionando');
});

