require('dotenv').config();
const express = require("express");
const app = express();
const connection = require("./database")
const cors = require('cors');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');

app.use(express.json())

//database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());

//routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

//server connection
const port = process.env.PORT || 4000;
app.listen(port, ()=> {
    console.log("Server running on port 4000");
})

app.post("/post",async(req, res) => {
    console.log(req.body);
    const {data}=req.body;

    try 
    {
        if(data=="jor")
        {
            res.send({status:"ok"})
        }
        else 
        {
            res.send({status: "user not found"})
        }
    }
    catch(error) 
    {
        res.send({status:"something went wrong try again"})
    }
});