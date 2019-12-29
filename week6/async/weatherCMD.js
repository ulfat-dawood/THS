const readline= require("readline-sync");
const axios = require('axios');
const key= "bd1fbea32cf38327b8a70a24a38fc190";



var question= `________________________
Welcome to Weather App
-press 1 to enter city name
-press q to Quit
_`
let city="";
let respose=-1;
  while (respose==1||-1){
  
    respose = readline.question(question);
    if(respose=="q"){
        console.log("\nthank you, bye :)\n");
        break;
       }
   
   city =readline.question("Please enter city name..");
   
   var url= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`
   
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
  
  
