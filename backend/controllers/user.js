const { user } = require("../database/user");


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
                email: email,
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

module.exports={
    registeruser
}