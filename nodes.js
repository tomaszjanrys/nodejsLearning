const { json } = require('body-parser');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const app = express();
const router = require('./routes/index')




//////////SET//////////////////////////
app.set('view engine', 'ejs' );
app.set('views','./views');
/////////USE///////////////////////////////////////////////
app.use(express.static('public'));
app.use('/css',express.static(__dirname + './public/css'))
app.use('/image', express.static(__dirname + './public/image'))

//middelware 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(cookieParser());
app.use(flash());
///end middelware///
/////////USE ROUTER////////////////////////////////////////
app.use('/',router);
app.use('/kontakt', router);
app.use('/register', router);

///////////////////////////////////////////////////////////

module.exports =app