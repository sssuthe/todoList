var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var setupController = require('./controllers/setupController');
var apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));//Will serve up static requests from the local public folder when asked for from the url of assets



app.set('view engine', 'ejs');//our view engine will be ejs, will remove later when react is pulled in but putting here for now

mongoose.connect(config.getDbConnectionString());
setupController(app);//use this to initialize some data
apiController(app);

app.listen(port);