const mongoose = require('mongoose');
const Joi = require('joi');

const exerciseSchema = new mongoose.Schema({
    name: {type: String, required: true},
    group: {type: String, required: true},
    muscle: {type: String, required: true},
    part: {type: String, required: true},
    record: {type: String, required: true},
})

const validate = (exercise) => {
    const schema = Joi.object({
        name:Joi.string().required().label('Exercise Name'),
        group:Joi.string().required().label('Muscle Group'),
        muscle:Joi.string().required().label('Target Muscle'),
        part:Joi.string().required().label('Target Part'),
        description:Joi.string().required().label('Exercise Description')
    })
    return schema.validate(exercise);
}
const Exercise = mongoose.model('exercise', exerciseSchema);

module.exports = {Exercise, validate};