const { User, validate } = require('../models/user_model');
const router = require('express').Router();
const bcrypt = require('bcrypt');

router.post("/",async(req,res) => {
        const user = await User.findOne({email: req.body.email});
        //if that user already exists
        if(user){
            return res.status(409).send({message: 'User with given email already exists'});
        }
        //authorization/password hashing
        const salt = await bcrypt.genSalt(Number(process.env.Salt));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        //user doesn't exist creates user
        let newUser = await new User({
            ...req.body,
            password: hashPassword
        }).save();

        newUser.password = undefined;
        newUser._v = undefined;

        res.status(201).send({data: newUser, message:'User created successfully'})
})

module.exports = router;