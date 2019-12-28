var axios = require("./axios");


//valid url
axios("url")
 .then(function(res){
     console.log(res);
 })
 .catch(function(res){
     console.log(res);
 })
//number url
 axios(6)
 .then(function(res){
     console.log(res);
 })
 .catch(function(res){
     console.log(res);
 })
//invalid url
 axios({})
 .then(function(res){
     console.log(res);
 })
 .catch(function(res){
     console.log(res);
 })