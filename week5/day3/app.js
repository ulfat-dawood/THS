const readline= require("readline-sync");
const axios = require('axios');


const city = readline.question("Enter you city?");

const key= "bd1fbea32cf38327b8a70a24a38fc190";


var url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
//console.log(url);

axios.get(url)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  ;