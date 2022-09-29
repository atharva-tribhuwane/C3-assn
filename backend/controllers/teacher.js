
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {teacher} = require("../database/teacher");
const secret = process.env.SECRETKEY;


const registerteacher = async (req, res) => {
    // console.log("Hello world");
    const { name, email, password, phone} = req.body;
    console.log("Hello world");
    const Teacher = await teacher.findOne({email:email});
    if (Teacher) {
        return res.status(400).send("Teacher Already Exist");
    }
    else {
        try{
            await teacher.create({
                name: name,
                email: email,
                password: bcrypt.hashSync(password,10),
                phone: phone,
                courses:[null]
            })
            return res.status(200).send({response:"Teacher Registered Successfully"});
        }
        catch(err){
           return res.status(500).send("Internal server error");
        }
    }
}

const loginteacher = async(req,res) =>{
    const {email,password} = req.body;
    console.log("in backend")
     const Teacher = await teacher.findOne({email:email});
     console.log(Teacher);
    if(!Teacher){
       return  res.status(400).send("Account donot exist");
    }
    const matched = bcrypt.compareSync(password, Teacher.password);
    console.log(matched)
    if(matched){
        let token = jwt.sign({email:Teacher.email,name:Teacher.name,phone:Teacher.phone,},secret);

        return res.status(200).send({
            response:"success",
            token:token,
            data:{
                id:Teacher._id,
                email:Teacher.email,
                name:Teacher.name,
                courses:Teacher.courses,
                type:"teacher"
            }
        });
    }
    
}

const teacherlist = async(req,res)=>{
    try{
    const teacherslist = await teacher.find({});
    return res.status(200).send(teacherslist);
    }
    catch(err){
        return res.status(400).send(err);
    }


}

const deleteteacher = async(req,res)=>{
    const id = req.params.id;
    try{
        await teacher.deleteOne({_id:id});
        return res.status(200).send({
            response:"Deleted Successfully"
        });
    }
    catch(err){
        return res.status(400).send({
            response:"failed to delete teacher"
        })
    }
}

module.exports={
    registerteacher,
    loginteacher,
    teacherlist,
    deleteteacher
}



// { $or: [{ email: email }, { user_id: user_id }] }