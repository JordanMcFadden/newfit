const { User, validate } = require('../models/user_model');
const router = require('express').Router();
const bcrypt = require('bcrypt');

router.post("/",async(req,res) => {
    try {
        const { error } = validate(req.body);
        //if error occurs
        if(error){
            return res.status(400).send({message: error.details[0].message});
        }
        const user = await User.findOne({email: req.body.email});
        //if that user already exists
        if(user){
            return res.status(409).send({message: 'User with given email already exists'});
        }
        //authorization/password hashing
        const salt = await bcrypt.genSalt(Number(process.env.Salt));
        const hashPassword = await bycrypt.hasj(req.body.password, salt);
        //user doesn't exist creates user
        await new User({...req.body, password: hashPassword}).save();
        res.status(201).send({message:'User created successfully'})

    } catch (error) {
        res.status(500).send({message: 'Internal server error' });
    }
})

module.exports = router;