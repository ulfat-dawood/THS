
var arr= [0,1,2,3,4];

//forEach
    var x= (o)=>{
         o+1;
    }
arr.forEach(x)


//map   
var x= (o)=>{
    //console.log(o);
}
arr.map(x)

//they look very similar there is a fundamental difference between forEach() and map() functions.

//forEach() changes the original array, whereas map() returns a new array, without mutating the original array.

