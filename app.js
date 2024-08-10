const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const errorControllers = require('./controller/error');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorControllers.get404);

app.listen(3000);
