const express = require('express');
// ****** using cookies parser 
const cookieParser = require('cookie-parser');

const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts'); 

const db = require('./config/mongoose');


app.use(express.urlencoded());

app.use(cookieParser());


// acccessing static folder 
app.use(express.static('./assets'));

app.use(expressLayouts);

// extract style and script from sub-pages into the layout

app.set('layout extractStyles', true);
app.set('layout extractScripts', true);



//  use express routers
app.use('/', require('./routes'));

// set up the view Engine as ejs
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server : ${err}`);

    }

    console.log(`Server is Running on port: ${port}`);

});