const mongoose = require('mongoose');

module.exports = async () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    try{
        await mongoose.connect(process.env.DB_ACCESS, connectionParams);
        console.log('connected to db')
    } catch(error){
        console.log('could not connect to db')
    }
}
