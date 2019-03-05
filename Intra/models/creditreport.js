const mongoose = require('mongoose');

const creditSchema = mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    }
});

const Credit = module.exports = mongoose.model('Credit', creditSchema);