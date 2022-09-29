require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const {ConnectDatabase} = require("./database/index");
const {registerstudent,loginstudent}  = require("./controllers/students");
const {registeradmin,loginadmin}  = require("./controllers/admin");
const {registerteacher,loginteacher,teacherlist,deleteteacher}  = require("./controllers/teacher");
const {getCourses, addCourses, getonecourse,deleteCourses} = require("./controllers/courses")
app.use(cors());
app.use(express.json());

//Admin Reqs
app.post("/admin/register",registeradmin);
app.post("/admin/login",loginadmin);

//teacher Reqs
app.post("/teacher/register",registerteacher);
app.post("/teacher/login",loginteacher);
app.get("/teacher/list",teacherlist);
app.delete("/teacher/:id",deleteteacher);

//student reqs
app.post("/student/register",registerstudent);
app.post("/student/login",loginstudent);

//course reqs
app.get("/course/all",getCourses);
app.post("/course/create",addCourses);
app.post("/course/getone/:id",getonecourse);
app.delete("/course/delete/:id",deleteCourses);





ConnectDatabase().then(()=>{

    app.listen(port,(err)=>{
        if(err){
            console.log("Error connecting server:",err);
        }
        else{
            console.log("connected to server successfully");
        }
    })
})



//summary user registration is completed now head to login  and after that start working on front end;