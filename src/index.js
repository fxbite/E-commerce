const express = require('express')
const path = require('path')
const morgan = require('morgan')
const exphbs = require('express-handlebars')

require('dotenv').config();
const app = express();
const port = process.env.PORT || 3000;

// Connect to DB
const db = require('./config/db');
db.connect();

// Route init
const route = require('./routes')
route(app);

// Static public file
app.use(express.static(path.join(__dirname, 'public')));

// Template engine
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// HTTP Logger
app.use(morgan('dev'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})