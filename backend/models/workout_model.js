const mongoose = require('mongoose');
const Joi = require('joi');

const ObjectId = mongoose.Scehma.Types.ObjectId;

const workoutSchema = new mongoose.Schema({
    name: {type: String, required: true},
    user: {type: ObjectId, ref: 'user', required: true},
    desc: {type: String},
    exercises: {type: Array, default:[]},
});

const validate = (workout) => {
    const schema = Joi.object({
        firstName: Joi.string().required(),
        user: Joi.string().required(),
        desc: Joi.string().allow(""),
        exercises: Joi.array().items(Joi.string()),
    })
    return schema.validate(workout)
}

const Workout = mongoose.model('workout', workoutSchema);

module.exports = {Workout, validate};
