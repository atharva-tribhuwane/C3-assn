const mongoose = require("mongoose");
const uri = process.env.DB_URI

const ConnectDatabase = () =>{
    return new Promise((resolve,reject)=>{
        mongoose.connect(uri,(err)=>{
            if(err){
                console.log("Error Connecting to database");
                reject();
                return;
            }
            console.log("Connected To Database Successfully!!!");
            resolve();
        })
    })
}

module.exports={
    ConnectDatabase
}