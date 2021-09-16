const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = Mongoose.model('user', UserSchema);

module.exports = User;