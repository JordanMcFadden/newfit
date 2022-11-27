const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity');

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    records: {type: [String], default: []},
    workouts: {type: [String], default:[]},
    isAdmin: {type: Boolean, default: false},
})

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({_id:this._id, firstName: this.firstName, isAdmin: this.isAdmin}, 
    process.env.JWTPRIVATEKEY, {expiresIn:'7d'});
    return token
};

//could be user instead of data
const validate = (user) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label('First Name'),
        lastName: Joi.string().required().label('Last Name'),
        email: Joi.string().required().label('Email'),
        password: passwordComplexity().required(),
    });
    return schema.validate(user);
}

const User = mongoose.model("user", userSchema);

module.exports = {User, validate};