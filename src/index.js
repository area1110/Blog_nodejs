const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars').engine;

const app = express();
const port = 3000;

// Config use static file in folder 'public'
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Template engine:
app.engine('hbs', handlebars({
  extname: '.hbs',
}));
app.set('view engine', 'hbs');
// Custom dir for handlebars
app.set('views', path.join(__dirname, 'resources/views'));

// Map Route with View
app.get('/', (req, res) => {
  res.render('home');
});
app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});