const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const CourseSchema = new Schema({
    id: String,
    title:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    instructor_name: {
        type: String,
        required: true
    },
    docs:[Object],
    course_rating:Number

})

const course = model("course", CourseSchema);

module.exports={
    course
}