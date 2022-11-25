const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json())

const mongoUrl=
"mongodb+srv://Maine:Maine@fitforyou.oijsriz.mongodb.net/test";

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
}).then(() => console.log("database connected"))
.catch((e)=>console.log(e));

app.listen(4000, ()=> {
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