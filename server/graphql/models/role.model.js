const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
   // id: String,
    name: String,
    username: String,
    password: String,
    email: String,
    status:String
}
// , {
//     timestamps: true
// }
);

module.exports = mongoose.model('User', UserSchema);