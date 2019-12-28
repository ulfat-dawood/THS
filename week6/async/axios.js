var func= (input)=>{
    var axios = new Promise(function(resolve,reject){
        if(typeof input == "string"){
            resolve("it is string");
        }
        else if(typeof input == "number"){
            resolve("it is number");
        }
        else{
            reject("invalid");
        }
    });
}

module.exports = {func}; 