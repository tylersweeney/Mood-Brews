const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
const ejs = require('ejs');
const path = require('path');
const keys = require('./config/keys');
var BreweryDb = require('brewerydb-node');
var brewdb = new BreweryDb('your-key-here');




//set up view engine
app.use(express.static('public'))
app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('home'); 
 });
 





app.listen(PORT, () => {
    console.log('app now listening for requests on port: ' + PORT);
});
