const { User, validate } = require('../models/user_model');
const router = require('express').Router();
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validObjectId = require('../middleware/validObjectId');

//creating user
router.post("/",async(req,res) => {
    try {
		const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already Exist!" });

		const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

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