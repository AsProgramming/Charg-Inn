const mongoose = require('mongoose');

const loanSchema = mongoose.Schema({
    dateCreated:{
        type: Date,
        required: true
    },
    amount:{
        type: Number,
        required: true
    },
    term:{
        type: Number,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    interestRate:{
        type: Number,
        required: true
    },
});

const Loan = module.exports = mongoose.model('Loan', loanSchema);