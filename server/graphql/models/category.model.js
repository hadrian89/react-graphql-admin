const { model, Schema } = require('mongoose');

const CategorySchema = new Schema({
    category: String,
    status: String,
    userid: String,
});

module.exports = model('Category', CategorySchema);