// Load modules
var express = require('express');
const ejs = require('ejs');

// Initialize Express
var app = express();

// Render static files
app.use(express.static('public'));

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Port website will run on
app.listen(8080);

// *** GET Routes - display pages ***

// Root Route
app.get('/', function (req, res) {
    var name = 'Jorge from ejs';
    res.render('pages/index', {
        name : name
    });
});

// Home Route - same as Root
app.get('/home', function (req, res) {
    var name = 'Jorge from ejs';
    res.render('pages/index', {
        name : name
    });
});

// About Route
app.get('/about', function (req, res) {
    res.render('pages/about');
});