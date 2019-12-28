var func= (input)=>{
    return new Promise(function(resolve,reject){
        if(input == "url"){
            resolve("valid url");
        }
        else if( typeof input == "number"){
            resolve("url must be string");
        }
        else{
            reject("invalid");
        }
    });
}
 
module.exports = func; 
