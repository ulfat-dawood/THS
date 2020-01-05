var express = require('express');
var app = express(); 
const bodyParser= require('body-parser'); 
var port = process.env.PORT || "1234"; 




//User Routes
//const userRoutes = require("./routes/users");
const adminRoutes = require("./routes/admin");
//app.use("/user", userRoutes);
app.use("/admin",adminRoutes);


app.listen(port ,()=>{
    console.log(`server started at ${port}`); 
})