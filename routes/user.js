const express = require('express')
const router = express.Router()
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const auth = require('../middlewares/middleware')


const User = require('../models/User')


router.get('/auth', auth, (req, res) => {
  
    res.json({
        id: req.user._id,
        username: req.user.username,
        email: req.user.email,
        isAdmin: req.user.isAdmin,
        isOffice: req.user.isOffice,
        isUser: req.user.isUser,
        
        success: true
    })
})

router.post('/signupUser', async (req, res) => {
    console.log("iam here in User Sign up")
    console.log("req.body", req.body)
    //Email Exist Or Not
    const isEmailExsist = await User.findOne({ email: req.body.email })
    if (isEmailExsist) return res.status(400).send("email already exist You can't regester again!!!")

    //Hash Password
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    //create the user 
    const user = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashPassword,
        phoneNumber: req.body.phoneNumber,
        isAdmin: false,
        isOffice: req.body.isOffice,
        isUser: req.body.isUser,
    });

    try {
        //save User in DB
        const savedUser = await user.save();
        const token = await jwt.sign({ _id: user._id }, process.env.TOKEN);
        res.header("Token", token)
        res.json({ token, userId: savedUser._id })

    }
    catch (err) {
        res.status(400).send(err);
    }
})

router.post('/signInUser', async (req, res) => {
    console.log("iam here in User Sign In")
    console.log('request:', req.body)

    try {
        //check if email exist or not 
        const user = await User.findOne({ email: req.body.email }) // find user  in db
        const match = await bcrypt.compare(req.body.password, user.password) // compare given password with hashed db password
        console.log("isMAtch:", match)
        console.log("the user", user)
        console.log("username:", user.username)

        if (match) {
            const token = await jwt.sign({ _id: user._id }, 'secret') // generate token in password match
            res.header('Token', token).status(201).json({ success: true, token, isAdmin: user.isAdmin, isUser: user.isUser, isOffice: user.isOffice ,userId:user._id , username : user.username }) // sending token as a res and header
        }
        else{
            console.log("your Password wrong")
        }
    } catch (err) {
        console.log("iam in error")
        res.status(404).json({ success: false, err })
    }
})


// router.post('/logOutUser',  (req, res) => {

// })



module.exports = router