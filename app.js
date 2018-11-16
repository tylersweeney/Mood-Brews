const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const path = require('path');
// const keys = require('./config/keys');




//set up view engine
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');

// create home route
app.get('/', function (req, res){
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers");
    res.render('home'); 
 });

//serve static files from public folder
app.use(express.static('public'))
 
app.listen(PORT, () => {
    console.log('app now listening for requests on port: ' + PORT);
});
