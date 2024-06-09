const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/crud');
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    imageurl: String,
})
module.exports = mongoose.model('user', userSchema);