const mongoose = require("mongoose");
//const { boolean } = require("webidl-conversions");

const UserSchema = new mongoose.Schema({
    username:{type: String, required: true, unique: true},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    isAdmin:{
        type: Boolean, //if capital B, dont need 2nd line
        default: false,
    },
    /*createdAt:Date.now() (we are using mongoose)*/
},
{timestamps: true}
);

module.exports = mongoose.model("User", UserSchema);