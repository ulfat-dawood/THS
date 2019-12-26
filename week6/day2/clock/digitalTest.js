var time= (new Date()).setHours(0,0,0,0);
var future= time+10000;
console.log(new Date(time).toString());

var func=()=>{
    
    cz(new Date(future -=1000));
}
setInterval(func,1000);