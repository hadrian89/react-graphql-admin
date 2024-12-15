const { model, Schema } = require('mongoose');

const MonthlySchema = new Schema({
    date: String,
    category: String,
    title: String,
    price: String,
    userid: String,
    status: String
});

module.exports = model('Transactions', MonthlySchema);