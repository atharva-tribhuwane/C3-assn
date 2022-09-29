const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {student} = require("../database/students");
const secret = process.env.SECRETKEY;


const registerstudent = async (req, res) => {
    const { name, email, password, phone} = req.body;
    console.log("Hello world");
    const Student = await student.findOne({email:email});
    console.log(Student);
    if (Student) {
        res.status(400).send({response:"User Already exist"});
    }
    else {
        try{
            await student.create({
                name: name,
                email: email,
                password: bcrypt.hashSync(password,10),
                phone: phone,
                subscribed_courses: [null]
            })
            return res.status(200).send({response:"User Registered Successfully"});
        }
        catch(err){
            return res.status(500).send({response:"Internal server error"});
        }
    }
}

const loginstudent = async(req,res) =>{
    const {email,password} = req.body;
    console.log("inside backend");
     const Student = await student.findOne({email:email});
    if(!Student){
        return res.status(400).send({response:"Account donot exist"});
    }

    const matched = bcrypt.compareSync(password,Student.password);
    if(matched){
        let token = jwt.sign({email:Student.email,name:Student.name,phone:Student.phone,},secret);

        return res.status(200).send({
            response:"success",
            token:token,
            data:{
                id:Student._id,
                email:Student.email,
                phone:Student.phone,
                subscribed_courses:Student.subscribed_courses,
                type:"student"
            }
        });
    }
}

module.exports={
    registerstudent,
    loginstudent
}



// { $or: [{ email: email }, { user_id: user_id }] }