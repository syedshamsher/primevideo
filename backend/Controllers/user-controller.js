const Users = require("../models/users")
const { registerValidation, loginValidation } = require("./validation")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")



const getUser = (req, res) => {
    Users.find().
        then((users) => res.json(users.filter((user) => user._id == req.user.id))).
        catch((err) => res.status(400).json("Error: " + err))
}

const addUser = async (req, res, next) => {
    console.log(req.body)
    const { error } = registerValidation(req.body)
    if (error) {
        return res.status(400).json(error.details[0].message);
    }

    const emailExists = await Users.findOne({ email: req.body.email });
    if (emailExists) {
        return res.status(400).send("User has already registered");
    }

    const hashedPassword = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    );

    const name = req.body.name
    const mobile = req.body.mobile
    const email = req.body.email
    const password = hashedPassword
    const type = req.body.type
    const orders = []
    const returns = []


    const newUser = new Users({ name, mobile, email, password, type, orders, returns })
    newUser.save()
        .then(() => res.json({ user: { name: name, email: email, type: type } }))
        .catch((err) => res.status(400).json("Error: " + err))
}

const editUser = (req, res) => {
    const id = req.params.id
    Students.findById(id).then((student) => {
        student.name = req.body.name
        student.age = req.body.age
        student.city = req.body.city
        student.gender = req.body.gender
        student.blood_group = req.body.blood_group

        student.save()
            .then(() => res.json("Student Updated Successfully"))
            .catch((err) => res.status(400).json("Error: " + err))
    }).catch((err) => res.status(404).json("Student not Found"))
}

// const orderAdd = (req, res) => {
//     const id = req.params.id
//     console.log(req.body)
//     Users.findById(id).then((user) => {
//         user.name = user.name
//         user.mobile = user.mobile
//         user.email = user.email
//         user.password = user.password
//         user.type = user.type
//         user.orders = [...user.orders,req.body]
//         user.returns = []       

//         user.save()
//             .then(() => res.json("Order Added Successfully"))
//             .catch((err) => res.status(400).json("Error: " + err))
//     }).catch((err) => res.status(404).json("User not Found"))
// }

// const deleteUser = (req, res) => {
//     const id = req.params.id
//     Students.findByIdAndDelete(id)
//         .then(() => res.status(200).json({ message: "student deleted successfully" }))
//         .catch((err) => res.status(404).json({ message: "student not found" }))

// }

const userLogin = async (req, res, next) => {
    console.log("asdas", req.body)
    const email = req.body.email
    const password = req.body.password

    const { error } = loginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = await Users.findOne({ email: email });
    if (!user) {
        return res.status(400).send("User not registered");
    }
    const validPass = await bcrypt.compare(password, user.password);
    if (!validPass) return res.status(400).send("Invalid password");

    const userinfo = {
        name: user.name,
        email: user.email,
        type: user.type,
        id: user._id
    }
    const accesstoken = jwt.sign(userinfo, process.env.SECRET_KEY, { expiresIn: "1d" })
    res.status(200).send({ accesstoken: accesstoken });
};




module.exports = { getUser, addUser, editUser, userLogin }