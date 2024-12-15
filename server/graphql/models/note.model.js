const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    date: String,
    day_reading: String,
    userid: String,
    description: String,
    night_reading: String
}
// , {
//     timestamps: true
// }
);

module.exports = mongoose.model('Note', NoteSchema);