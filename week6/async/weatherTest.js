const readline= require("readline-sync");
const axios = require('axios');
const key= "bd1fbea32cf38327b8a70a24a38fc190";
var question= `________________________
Welcome to Weather App

ENTER CITY NAME: `

let respose=-1;


var input=()=>{
    return new Promise(function(resolve,reject){
        
        cityName = readline.question(question);
        var url= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`
        resolve(url);
    })
}

input()
.then(function(url){
   console.log(url); 
})

