const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const TeacherSchema = new Schema({
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
    },
    courses:{
        type:[Object]
    }
})

const teacher = model("teacher", TeacherSchema);

module.exports={
    teacher
}