//server.js:initial starting point for the node/express server
//dependencies
var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var exphbs = require('express-handlebars');

//sets up the Express App
var app = express();
var PORT = process.env.PORT || 3050;

//requiring our models for syncing
var db = require("./models");

app.use(express.static(__dirname + '/public'));
//app.use(__dirname + '/public', express.static(“public”));
//app.use("public",express.static(__dirname+ "/public"))

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controllers')
app.use('/', routes);


// Set the port of our application
// process.env.PORT lets the port be set by Heroku
//var PORT = process.env.PORT || 8080;

var port = process.env.PORT || 3050;
app.listen(port);