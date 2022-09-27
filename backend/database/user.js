const mongoose = require("mongoose");
const { object } = require("webidl-conversions");
const { Schema, model } = mongoose;
const UserSchema = new Schema({
    user_id: String,
    name:{
        type:String,
        required:true
    },
    user_type: {
        type:String,
        default: "student",
        enum: ["student", "teacher", "admin"],
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    subscribed_courses:[Object]
})

const user = model("user", UserSchema);

module.exports={
    user
}