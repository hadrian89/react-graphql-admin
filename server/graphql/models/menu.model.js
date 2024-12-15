const mongoose = require('mongoose');

const MenuSchema = mongoose.Schema({
    name: String,
    to: String,
    sequence: String,
    // status: String,
    submenu: Object,
    status: { type: String, default: "Active" },
});

module.exports = mongoose.model('Menu', MenuSchema);