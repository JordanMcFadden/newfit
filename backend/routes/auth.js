const router = require('express').Router();
const { User } = require('../models/user_model');
const Joi = require('joi');
const bcrypt = require('bcrypt');


router.post("/", async(req, res) => {
        const user = await User.findOne({ email: req.body.email });
        if(!user) {
            return res.status(401).send({message: 'Invalid Email or Password'});
        }

        const validPassword = await bcrypt.compare(
            req.body.password, user.password
        );

        if(!validPassword){
            return res.status(401).send({message: 'Invalid Email or Password'})
        }

        const token = user.generateAuthToken();
        res.status(200).send({data: token, message: 'Logged in successfully'})
})

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label('Email'),
        password: Joi.string().required().label('Password')
    });
    return schema.validate(data);
}

module.exports = router;