const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
    amount:{
        type: Number,
        required: true
    },
    paymentDate:{
        type: Date,
        required: true
    }
});

const Payment = module.exports = mongoose.model('Payment', paymentSchema);