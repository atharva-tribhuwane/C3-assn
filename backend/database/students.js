const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const StudentsSchema = new Schema({
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
    courses:[Object]
})

const student = model("student", StudentsSchema);

module.exports={
    student
}