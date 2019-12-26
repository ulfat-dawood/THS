var time= (new Date()).setHours(0,0,0,0);
var future= time+10000;
var decrement
var inpput =10;

var func=()=>{
    if(inpput<0)
    clearInterval(interval);
    
    future= future-1000;
    console.log(new Date(future).toString());
    inpput--;
}
var interval= setInterval(func,1000);