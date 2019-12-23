const axios = require('axios');
const key= "fd4786f2c75440289af619c9bfb869e4";
const city = "Jeddah";
var url= `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${key}`;

var weather;
var temp; 
var arr= [];

axios.get(url)
  .then(function (response) {
    // handle success
    weather= response.data.data[0].weather.description
    temp=response.data.data[0].temp;
    for(var i=0; i<response.data.data.length;i++){
        arr.push(response.data.data[i].temp);
    }
    
    
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  ;