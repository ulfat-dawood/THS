
var express = require('express');
//var bodyParser = require('body-parser'); 
 
var app = express();

const port = 8081;

app.use(express.static('public'));
// app.use(bodyParser.urlencoded({ extended: false }))



// // app.get('
//  ', (req, res)=>{
// //     res.send("Hello world at /abc"); 
// //     console.log("get success"); 
// // });

app.get('/', (req, res)=>{
    console.log("done"); 
    res.sendFile("/Users/ulfat_dawood/Desktop/TheHackingSchool/THS/week7/day4/test/public/index.html"); 
    //res.send("done")
});

app.listen(port, ()=>{
    console.log(`Server started at ${port}`);
});