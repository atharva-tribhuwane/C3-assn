
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
        res.status(400).send("User Already Exist");
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
            res.status(200).send("Teacher Registered Successfully");
        }
        catch(err){
            res.status(500).send("Internal server error");
        }
    }
}

const loginteacher = async(req,res) =>{
    const {email,password} = req.body;

     const Teacher = await teacher.findOne({email:email});
    if(!Teacher){
        res.status(400).send("Account donot exist");
    }

    const matched = bcrypt.compareSync(password,Teacher.password);
    if(matched){
        let token = jwt.sign({email:Teacher.email,name:Teacher.name,phone:Teacher.phone,},secret);

        res.status(200).send({
            response:"success",
            token:token,
            data:{
                email:Teacher.email,
                name:Teacher.name,
                courses:Teacher.courses,
                type:"teacher"
            }
        });
    }
}

module.exports={
    registerteacher,
    loginteacher
}



// { $or: [{ email: email }, { user_id: user_id }] }