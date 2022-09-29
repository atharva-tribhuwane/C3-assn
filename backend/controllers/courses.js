const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { course } = require("../database/courses");
const secret = process.env.SECRETKEY;


const getCourses = async (req, res) => {

    try {
        const courseslist = await course.find({});
        return res.status(200).send(courseslist);
    }
    catch (err) {
        return res.status(400).send({
            response: err
        })
    }
}
const deleteCourses = async (req, res) => {
    const id = req.params.id;
    try {
        const courseslist = await course.deleteOne({course_id:id});
        return res.status(200).send({
            response:"Deleted Successfully"
        });
    }
    catch (err) {
        return res.status(400).send({
            response:"failed to delete teacher"
        })
    }
}

const addCourses = async (req, res) => {
    const { course_id, title, description, instructor_name,instructor_id, docs, subscribers, course_rating } = req.body;
    console.log("hello addcourses");
    const Course = await course.find({ course_id: course_id });
    console.log("course",Course);
    if (Course.length>1) {
        return res.status(400).send({
            response: "Course Already Exist"
        })
    }
    try {
        await course.create({
            course_id: course_id,
            title: title,
            description: description,
            instructor_name: instructor_name,
            instructor_id:instructor_id,
            docs: docs,
            subscribers: subscribers,
            course_rating: course_rating
        })
        return res.status(200).send({
            response: "Course Has Been set Successfully"
        })
    }
    catch (err) {
        return res.status(400).send({
            response: err
        })
    }

}

const getonecourse = async (req, res) => {
    const { id } = req.params.id;

    const data = await course.find({ course_id: id });
    if (!data) {
        return res.status(400).send({
            response: "No Such Course Exist"
        })
    }
    return res.status(200).send({
        response: "success",
        data: data
    })
}

module.exports={
    getCourses, addCourses, getonecourse,deleteCourses
}