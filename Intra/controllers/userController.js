const mongoose = require('mongoose');
const passport = require('passport');
require('../passportConfig');
const _ = require('lodash');
const User = mongoose.model('User');

module.exports.authenticate = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if(err) return res.status(400).json(err);
        else if(user) return res.status(200).json({"token": user.generateJwt()});
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.register = (req, res, next) => {
    //TODO 
    let newUser = new User({
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
    });

    newUser.save((err, user)=>{
        if(err){
            res.json({msg: 'Failed to save user'});
        }else{
            res.json({msg: 'user added successfully'});
        }
    });
}