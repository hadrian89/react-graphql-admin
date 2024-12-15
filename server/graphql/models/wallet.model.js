const mongoose = require('mongoose');

const WalletSchema = mongoose.Schema({
    Date: String,
    Type: String,
    Account: String,
    Currency: String,
    Amount: String,
    Amount_GBP: String,
    Category: String,
    Subcategory: String,
    userid: String,
});

module.exports = mongoose.model('Wallet', WalletSchema);