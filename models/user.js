const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required: true
    },
    name : {
        type : String,
        required : true
    }
},{
    // timestamps is used for getting created at and updated at time
    timestamps: true 
});


const User = mongoose.model('User',userSchema);

module.exports = User;  