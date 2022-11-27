const { User, validate } = require('../models/user_model');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validObjectId = require('../middleware/validObjectId');

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

// get all users
router.get('/', admin, async(req, res) => {
    const users = await User.find().select('-password -_v');
    res.status(200).send({data: users});
})

// get user by id
router.get('/:id', [validObjectId, auth], async(req, res) => {
    const user = await User.findById(req.params.id).select('-password-_v');
    res.status(200).send({data:user})
})

// update user by id
router.put('/:id', [validObjectId, auth], async(req, res) => {
    const user = await User.findByIdAndUpdate(
        req.params.id,
        {$set: req.body },
        {new: true}
    ).select("-password-_v");
    res.status(200).send({data: user})
})

//delete user by id
router.delete('/:id', [validObjectId, admin], async(req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).send({message: 'Successfully deleted user'})
});


module.exports = router;