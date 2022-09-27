require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const {ConnectDatabase} = require("./database/index");
const {registerstudent,loginstudent}  = require("./controllers/students");
const {registeradmin,loginadmin}  = require("./controllers/admin");
const {registerteacher,loginteacher}  = require("./controllers/teacher");
// app.use(cors);
app.use(express.json());

app.post("/admin/register",registeradmin);
app.post("/admin/login",loginadmin);
app.post("/teacher/register",registerteacher);
app.post("/teacher/login",loginteacher);
app.post("/student/register",registerstudent);
app.post("/student/login",loginstudent);




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