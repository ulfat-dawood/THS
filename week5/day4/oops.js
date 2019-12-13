//accept arguments without spesifying parameters:

function func1() {
    if(arguments.length == 2)
    console.log(arguments[0]+arguments[1]);
    if(arguments.length == 3)
  
    console.log(arguments[0]*arguments[1]*arguments[2]);
  }
  
  func1(2, 3);
  func1(2, 3, 5);