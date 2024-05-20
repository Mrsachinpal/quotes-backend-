const mongoose=require('mongoose')
const passportLocalMongoose = require('passport-local-mongoose');

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email:{
        type: String,
        trim: true,
        required: true
    }

})
userSchema.plugin(passportLocalMongoose);
let User = mongoose.model('User', userSchema);
module.exports = User;
