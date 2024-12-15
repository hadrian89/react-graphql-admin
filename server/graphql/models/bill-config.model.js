const mongoose = require('mongoose');

const BillConfigSchema = mongoose.Schema({
    dayPrice: String,
    nightPrice: String,
    standingPrice: String,
    vatPercent: String,
    status: String,
});

module.exports = mongoose.model('BillConfig', BillConfigSchema);