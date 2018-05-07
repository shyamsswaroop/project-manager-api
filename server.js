var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//Initialize the server side routes
var appRoutes = require('./routes/app');
var projectRoutes = require('./routes/project');
var userRoutes = require('./routes/user');
var taskRoutes = require('./routes/task');

//Creare the express server
const app = express();

//Connect to local mongodb instance
mongoose.connect('mongodb://admin:admin123@localhost:27017/admin');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

//Enable cross origin calls
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
    next();
});

app.use('/project', projectRoutes);
app.use('/user', userRoutes);
app.use('/task', taskRoutes);
app.use('/', appRoutes);


app.listen(3000, function() {
    console.log('listening on 3000')
})

// app.get('/', function (request, response) {
//     response.send('Hello World2')
// })