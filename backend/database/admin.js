const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const AdminSchema = new Schema({
    id: String,
    name:{
        type:String,
        required:true
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
    }
})

const admin = model("admin", AdminSchema);

module.exports={
    admin
}