const mongoose = require('mongoose');
require('mongoose-double')(mongoose);

const AccountSchema = new mongoose.Schema({
    accId: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    balance: {
        type: mongoose.Schema.Types.Double,
        unique: false,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
    },
    dateOpened: {
        type: Number,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const Account = mongoose.model('accounts', AccountSchema);

module.exports = Account;
