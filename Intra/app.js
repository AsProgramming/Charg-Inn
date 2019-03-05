const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const passport = require('passport');
const bodyParser = require('body-parser');
const path = require('path');
const route = require('./routes/route');
var passwordHash = require('password-hash');

var app = express();

mongoose.connect('mongodb://localhost:27017/users');

mongoose.connection.on('connected',()=>{
    console.log('Connected to DB');
});

mongoose.connection.on('error', (err)=>{
    if(err){
        console.log(err);
    }
});

const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use('/api', route);

app.get('/', (req, res)=>{
    res.send('testing...');
});

app.listen(port, ()=>{
    console.log('Server side running');
});