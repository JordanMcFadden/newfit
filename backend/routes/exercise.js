const router = require('express').Router();
const { User } = require('../models/user_model');
const {Exercise, validate} = require('../models/exercise_model');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const validObjectId = require('../middleware/validObjectId');
const { valid } = require('joi');

//create exercise
router.post('/', async(req, res) =>{
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send({message: error.details[0].message});
    }

    const exercise = await Exercise(req.body).save();
    res.status(201).send({data: exercise, message: 'Exercise created successfully'})
})

// get all exercises
router.get('/', async(req, res) => {
    const exercises = await Exercise.find();
    res.status(200).send({data: exercises});
});

//update exercise
router.put('/:id', [validObjectId, admin], async(req, res) => {
    const exercise = await Exercise.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).send({data: exercise, message: 'Updated exercise successfully'});
})

//delete exercise by id
router.delete('/:id', [validObjectId, admin], async(req, res) => {
    await Exercise.findByIdAndDelete(req.params.id)
    res.status(200).send({message: 'Exercise deleted'})
})

// add record
router.put('/record/:id', [validObjectId, auth], async(req, res) => {
    let resMessage = "";
    const exercise = await Exercise.findById(req.params.id);
    if(!exercise){
        return res.status(400).send({message: 'exercise does not exist'})
    }
    const user = await User.findById(req.user._id);
    const index = user.records.indexOf(exercise.id);
    if (index === -1){
        user.records.push(exercise._id)
        resMessage = "Added to your records"
    } else {
        user.records.splice(index, 1);
        resMessage = 'Removed from your records'
    }
    await user.save();
    res.status(200).send({message: resMessage});
})

// Get records
router.get("/record", auth, async (req, res) => {
	const user = await User.findById(req.user._id);
	const exercises = await Exercise.find({ _id: user.records });
	res.status(200).send({ data: exercises });
});

module.exports = router;
