var sum= (num1,num2)=>{
    return new Promise(function(resolve,reject){

      resolve(num1+num2);
    
    })
}


sum(1,2)
.then(function(response){
    return response; //response is resolve object with the value of num1++num2
}).then(function(response){
     sum(response,3);
}).then(function(response){
  console.log(response)
})
