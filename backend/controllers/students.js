
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {student} = require("../database/students");
const secret = process.env.SECRETKEY;


const registerstudent = async (req, res) => {
    // console.log("Hello world");
    const { name, email, password, phone} = req.body;
    console.log("Hello world");
    const Student = await student.findOne({email:email});
    console.log(Student);
    // res.status(200).send("ok");
    if (Student) {
        res.status(400).send("User Already Exist");
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
            res.status(200).send("User Registered Successfully");
        }
        catch(err){
            res.status(500).send("Internal server error");
        }
    }
}

const loginstudent = async(req,res) =>{
    const {email,password} = req.body;

     const Student = await student.findOne({email:email});
    if(!Student){
        res.status(400).send("Student donot exist");
    }

    const matched = bcrypt.compareSync(password,Student.password);
    if(matched){
        let token = jwt.sign({email:Student.email,name:Student.name,phone:Student.phone,},secret);

        res.status(200).send({
            response:"success",
            token:token,
            data:{
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