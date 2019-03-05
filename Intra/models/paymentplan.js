const mongoose = require('mongoose');

const paymentplanSchema = mongoose.Schema({
    paymentDates: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Payment'
    }],
    CapitalPaid:{
        type: Number,
        required: true
    },
    InterestPaid:{
        type: Number,
        required: true
    },
    balance:{
        type: Number,
        required: true
    }
});

const PaymentPlan = module.exports = mongoose.model('PaymentPlan', paymentplanSchema);