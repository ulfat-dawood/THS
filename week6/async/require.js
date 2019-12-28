var axios = require("./axios");


//console.log(axios);
axios("url")
 .then(function(res){
     console.log(res);
 })
 .catch(function(res){
     console.log(res);
 })

 axios(6)
 .then(function(res){
     console.log(res);
 })
 .catch(function(res){
     console.log(res);
 })

 