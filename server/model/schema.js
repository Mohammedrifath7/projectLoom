const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email : String,
    password : String,
    resetPasswordToken : String,
    resetPasswordExpires : Date
})

const User = mongoose.model("User",UserSchema);

module.exports = User;