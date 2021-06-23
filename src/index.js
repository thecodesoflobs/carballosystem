const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const MethtodOveride = require('method-override');
const expressSession =require ('express-session');
//init
const app = express();
require('./databse')






//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname: 'hbs',
}));

app.set('view engine', 'hbs');




//Middlewares

app.use(express.urlencoded({
    extended: false
}));
app.use(MethtodOveride('_method'));

app.use(expressSession({
    secret: 'papota',
    resave: true,
    saveUninitialized:true
}));










//GV



//Routes

app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/request'));



//Static Files

app.use(express.static(path.join(
    __dirname, 'public'
)));


//Server Listen

app.listen(app.get('port'), ()=> {
    console.log("Server en funcionamiento", app.get('port'));
});