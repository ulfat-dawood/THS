
var express = require('express');
var app = express();

const port = 8081;


app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
});

app.get('/', (req, res)=>{
    res.send("Hello world"); 
    console.log("success"); 
});

app.post('/', (req, res)=>{
    res.send("post request"); 
    console.log("success"); 
});
