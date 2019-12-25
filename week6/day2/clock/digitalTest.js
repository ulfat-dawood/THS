

var time=()=>{
    var tim = new Date();
    var min = tim.getMinutes();
    var hr = tim.getHours();
    var sec =tim.getSeconds();
    var ampm= "am"; 

    if(hr>12){
        hr=hr-12;
        ampm="pm";
    }
    console.log(hr+":"+min+":"+sec+" "+ampm ); 

        setTimeout(time,1000);
}
time();