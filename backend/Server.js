require('dotenv').config();
require('express-async-error')
const express = require("express");
const connection = require("./database")
const cors = require('cors');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const exerciseRoutes = require('./routes/exercise');
const app = express();


//database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/exercises', exerciseRoutes);

//server connection
const port = process.env.PORT || 4000;
app.listen(port, ()=> {
    console.log("Server running on port 4000");
})
