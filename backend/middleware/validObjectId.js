const mongoose = require('mongoose');

//Created to see if a object is authorized, error message if not (only seen on Postman)
module.exports = (req, res, next) => {
    if(!mongoose.Types.ObjectId.isValid(req.params.id))
    {
        return res.status(404).send({message: "Invalid ID"})
    }

    next();
}