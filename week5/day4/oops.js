//accept arguments without spesifying parameters:

function func1() {
    if(arguments.length == 2)
    console.log(arguments[0]+arguments[1]);
    if(arguments.length == 3)
  
    console.log(arguments[0]*arguments[1]*arguments[2]);
  }
  
  //func1(2, 3);
  //func1(2, 3, 5);
  function factorial(n) { 
    var ans=1; 
      
    for (var i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
} 
  //Currying function: 
  function func(x){
    return function(y){
      return factorial(x) * factorial(y);
    };
  }
 //console.log(func(2)(5));


 //Comparing two objects: 
 obj11={
    a:1,
    b:2
 }

obj22={
    a:1,
    b:2
 }

 console.log(obj11==obj22, obj11===obj22); //returns false false. 

 var compareObj=(obj1,obj2)=>{
     if(obj1.length==obj2.length){
        if(JSON.stringify(obj1) === JSON.stringify(obj2)){
            return true;
        }
     }
         
     
 }
 console.log(compareObj(obj11,obj22));
