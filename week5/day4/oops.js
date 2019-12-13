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

 obj1={
    a:1,
    b:2
 }

obj2={
    a:1,
    b:2
 }

 console.log(obj1==obj2, obj1===obj2);

