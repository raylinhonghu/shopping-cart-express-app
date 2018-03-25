var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var appRoute = require('./routes/appRoutes');
var mongoose = require('mongoose');
var BodyParser = require('body-parser');
var cors = require('cors');


mongoose.connect('mongodb://localhost/meanDb');
// set up app
var app = express();

// middle ware
app.use(cors());
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.use('/',appRoute);

// server
http.createServer(app).listen(port);
console.log("Backend running on port:", port);
