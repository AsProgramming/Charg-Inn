const mongoose = require('mongoose');

const accountSchema = mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    age:{        
        type: Number,
        required: true
    },
    address:{
        type: String,
        required: true
    },
    actif:{        
        type: Boolean,
        default: true
    },
    balance:{
        type: String,
        required: false
    },
    loans: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Loan'}
    ],
    paymentsReceived: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment'
    }]
});

const Account = module.exports = mongoose.model('Account', accountSchema);