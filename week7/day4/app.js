const express= require("express");
const app = express(); // express is a method chaining we can envoke other funtions under express().
const config = require("config");


//if there is any environment variable available then use it otherwise 
const port =process.env.PORT || config.get("PORT")

app.get("/", (req,res)=>{
    res.send("It's live");
});

app.listen(port, ()=>{
    console.log(`Server started at ${port}`)
});

