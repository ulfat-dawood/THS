
var express = require('express');
var app = express();

const port = 8081;

app.use(express.static('public'));



app.get('/', (req, res)=>{
    res.send("Hello world at /abc"); 
    console.log("get success"); 
});

app.post('/abc', (req, res)=>{
    res.send("post request at /abc"); 
    console.log("post success"); 
});    

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
});