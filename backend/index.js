require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT;
const {ConnectDatabase} = require("./database/index");
const {registeruser} = require("./controllers/user");
// app.use(cors);
app.use(express.json());

app.post("/register",registeruser);




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