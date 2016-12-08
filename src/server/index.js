var express = require('express'),
    http = require('http'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    router = require('./routes/service_directory_routes');

var app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', '/static')));

app.set('views', path.join(__dirname, '..', '..', 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(cookieParser());

app.use('/', router);

app.listen(3000, (err) => {
    if (!err) {
        console.log("Server listen on localhost:3000");
    } else {
        console.log(err);
    }
});

module.exports = app;
