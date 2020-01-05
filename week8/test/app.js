var express = require('express');
const serveIndex = require('serve-index');
var app = express(); 
var port = process.env.PORT || "1234"; 


//access files in 'public' folder
app.use(serveIndex('views'));
app.use(express.static('views'));

//localhost/home
app.get('/home', (req,res)=>{
    res.send("You asked for home")
})

//localhost/form
app.get('/fakeForm', (req,res)=>{
    res.sendFile(__dirname+'/form.html');
});

app.get('/fakeRoute', (req,res)=>{
    res.send(req.query.first_name);
});



app.listen(port ,()=>{
    console.log(`server started at ${port}`); 
})