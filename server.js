var express = require('express');
var methOver = require('method-override');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.port || 8080;

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}))

app.use(methOver('_method'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');
app.use('/', routes);


app.listen(port);
console.log('Listening on port: '+ port)

