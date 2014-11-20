var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require('method-override');

app.use(express.static(__dirname + '/'));
app.use(morgan('dev'));

// lets us get data from a post
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride());

var port = process.env.PORT || 8082;

// Routes
var router = express.Router();

app.get('*',function(req,res){
	res.sendfile('./public/index.html');
});

app.listen(port);
console.log('running on port '+port);