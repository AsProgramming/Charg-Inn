const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Account = require('../models/account');
const Loan = require('../models/loan');
const Payment = require('../models/payment');
const PayPlan = require('../models/paymentplan');
const Credit = require('../models/creditreport');
const ctrlUser = require('../controllers/userController');
const bcrypt = require('bcrypt');

router.get('/users', (req, res, next)=>{
    User.find(function(err, users){
        res.json(users);
    })
    //res.send('Retreiving data...');
    //TODO
});

router.post('/login', ctrlUser.authenticate);

    /* var validUser = '';(req, res, next)=>{
    console.log('testing');
    let retUser = new User({
        email: req.body.email,
        password: req.body.password,
    });
   
    console.log(retUser);
    let user = findUser({email: retUser.email});
    user.then(function(res){
        console.log(res);
    });
    
    User.findOne({email: retUser.email}, function(err, user){
        if(err){
            validUser = 'Failed to lookup user';
            return validUser;
        }
        if(!user){
            validUser = 'No user found';
            console.log(validUser);
        }else{
            user.comparePassword(retUser.password, function(err, isMatch){
                if (err) throw err;
                validUser = 'Logged In';
                return validUser;
            });/* 
            bcrypt.compare(retUser.password, user.password, function(err, res) {
                if(res) {
                 // Passwords match
                 validUser = 'Logged in';
                } else {
                 // Passwords don't match
                 validUser = 'Wrong password';
                } 
              });
             
            bcrypt.compare(retUser.password, user.password, function(err, res) {
                if(res) {

                 // Passwords match
                 validUser = 'Logged in';
                 console.log(validUser);
                } else {
                 // Passwords don't match
                 validUser = 'Wrong password';
                 console.log(validUser);
                } 
              })
        }
        console.log(test);
        
    });
    res.json({msg: validUser});});*/


const findUser = async (query) => { 
    try {  
         return await User.findOne(query)
    } catch(error) { 
          // handle the errors
          throw error;
  }
}

router.post('/createUser', ctrlUser.register);



router.delete('/contact', (req, res, next)=>{
//TODO delete 
});

router.post('/createAccount', (req, res, next)=>{
    
    let newAccount = new Account({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        address: req.body.address,
        actif: true,
        balance: 0,
        loans: [],
        paymentsReceived: []
    });

    User.findOne({email:"test@gmial.com"}, function(err, result){
        console.log(result);
        newAccount.user = result.id;
        console.log(newAccount);
    newAccount.save((err, user)=>{
        if(err){
            res.json({msg: 'no goodFailed to save user'});
        }else{
            res.json({msg: 'account added successfully'});
        }
    });
    });

} )

module.exports = router;