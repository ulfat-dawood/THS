
const axios = require('axios');

  while (true){
  
    
   
   var url= `https://api.openweathermap.org/data/2.5/weather?q=Delhi&appid=bd1fbea32cf38327b8a70a24a38fc190`
   
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
  
  break;
  
}
