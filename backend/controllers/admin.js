
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { admin } = require("../database/admin");
const secret = process.env.SECRETKEY;


const registeradmin = async (req, res) => {
    // console.log("Hello world");
    const { name, email, password, phone } = req.body;
    console.log("Hello world");
    const Admin = await admin.findOne({ email: email });
    if (Admin) {
        res.status(400).send("User Already Exist");
    }
    else {
        try {
            await admin.create({
                name: name,
                email: email,
                password: bcrypt.hashSync(password, 10),
                phone: phone
            })
            res.status(200).send("Admin Registered Successfully");
        }
        catch (err) {
            res.status(500).send("Internal server error");
        }
    }
}

const loginadmin = async (req, res) => {
    console.log("entering backend");
    const { email, password } = req.body;

    const Admin = await admin.findOne({ email: email });
    if (!Admin) {
        return res.status(400).send("Account donot exist");
        // console.log("sending 400");
    }

    const matched = bcrypt.compareSync(password, Admin.password);
    if (matched) {
        console.log("password matched");
        let token = jwt.sign({ email: Admin.email, name: Admin.name, phone: Admin.phone, }, secret);
        console.log("sending response");
        return res.status(200).send({
            response: "success",
            token: token,
            data: {
                email: Admin.email,
                phone: Admin.phone,
                type: "admin"
            }
        });
    }
}

module.exports = {
    registeradmin,
    loginadmin
}



// { $or: [{ email: email }, { user_id: user_id }] }