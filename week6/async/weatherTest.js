const readline= require("readline-sync");
const axios = require('axios');
const key= "bd1fbea32cf38327b8a70a24a38fc190";
var question= `________________________
Welcome to Weather App
-Enter city name
-press q to Quit
_`

let respose=-1;


var input=()=>{
    return new Promise(function(resolve,reject){
        var url;
        cityName = readline.question(question);
        if(cityName == "q"){
            url="q";
        }
        else{url= `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`}
        resolve(url);
    })
}



async function func() {
    try {
        
        do{
            let url = await input();
            if(url == "q") break;
            let message = await axios.get(url);
            console.log("\n"+message.data.weather[0].description);
        }while(true)
        

        

        
        
    }
    catch (error) {
        console.log(error.message);
    }
}

(async () => {
    await func();
})();



