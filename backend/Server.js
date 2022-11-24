const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const routesHandler = require('./routes/Handler.js');
const mongoose = require('mongoose');

require('dotenv/config');



//DB connection
mongoose.connect(process.env.DB_URI, {useNewUrlparser:true, useUnifiedTopology:true})
.then( ()=> {
    console.log('DB connected');
})
.catch( (err) => {
    console.log(err);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log('Server is running on port 4000')
});

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/app', routesHandler);

