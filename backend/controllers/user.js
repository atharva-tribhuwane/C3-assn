const { user } = require("../database/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = process.env.SECRETKEY;
const registeruser = async (req, res) => {
    // console.log("Hello world");
    const { name,user_id, user_type, email, password, phone, subscribed_courses } = req.body;
    console.log("Hello world");
    const User = await user.findOne({ $or: [{ email: email }, { user_id: user_id }] });
    console.log(User);
    // res.status(200).send("ok");
    if (User) {
        res.status(400).send("User Already Exist");
    }
    else {
        try{
            await user.create({
                user_id: user_id,
                name: name,
                user_type: user_type,
                email: bcrypt.hashSync(email,10),
                password: password,
                phone: phone,
                subscribed_courses: subscribed_courses
            })
            res.status(200).send("User Registers Successfully");
        }
        catch(err){
            res.status(500).send("Internal server error");
        }
    }
    
}

const loginuser = (req,res) =>{
    const {email,password} = req.body;

    const User = user.findOne({email:email});
    if(!User){
        res.status(400).send("User Donot exist");
    }

    const matched = bcrypt.compareSync(password,User.password);
    if(matched){
        let token = jwt.sign({email:User.email,user_id:User.user_id,phone:User.phone},secret);

        res.status(200).send({
            response:"success",
            data:{
                user_id:User.user_id,
                email:User.email,
                user_type:User.user_type,
                phone:User.phone,
                subscribed_courses:User,subscribed_courses

            }
        });
    }
}

module.exports={
    registeruser
}