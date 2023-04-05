const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;

const app = express();
const port = 3000;

const route = require('./routes/index.route');

// Config use static file in folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Use Middleware
app.use(express.urlencoded({
  extended : true
}));
app.use(express.json());

// Template engine:
app.engine('hbs', handlebars({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
// Custom dir for handlebars
app.set('views', path.join(__dirname, 'resources/views'));

// Map Route with Controller
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});