

// 1)Write a program to given input Check whether  Even or odd.
   
    var fun1= (num)=>{
     var c= num % 2;
     if (c ==0)
      return "even";
    else
      return "odd";
    }
    //console.log(func1(6),func1(5));
  

// 2)Write a program to Generate Even and Odd Number less than N and Generate ‘N’Even and Odd Numbers.
  {
      var fun2= (n)=>{
        for( var i=0; i <n; i++){
            console.log(Math.floor(Math.random()* n));
        }
         
      }
      //fun2(5); //this method will generate 5 numbers less than 5
  }

// 3)Write a program to decide given N is Prime or not.
    var fun3= (n)=>{
        var x;
        if(n == 1 || n==2) 
            return "prime";
        //iterate through numbers from 2 to n-1
        for(var i=2; i<n; i++){
            if(n%i ==0){
              x= "not prime";
              break;
              } 
            else
              x="prime";
        }
        return x;
    } 
    //console.log(fun3(17));

// 4)Write a program to subtract two integers without using Minus (-) operator

    var fun4= (num1, num2)=>{
        for(var i=0; i<num2; i++){
            --num1;
        }
        return num1; 
    }
    //console.log(fun4(6,10));//6-10=(-4)

// 5)Write a program to find remainder of two numbers without using modulus (%)operator
    var fun5=(a,b)=>{
        var div= a/b;
        var noRe= Math.floor(div);
        return div - noRe;
    }
    //console.log(fun5(10,3));

//6)Write a program to generate Prime  Numbers less than N and Generate ‘N’ Prime Numbers/in given range.
    var fun6=(n)=>{
      for(var i=2; i<n; i++){
        if(fun3(i)=="prime")
         console.log(i);
      }    
    }
    //fun6(20);//this method will print all prime numbers less than n

//7)Write a program that prints the numbers from 1 to 100 and for multiples of '3' print"Fizz" instead of the number and for the multiples of '5' print "Buzz".
    var fun7= ()=>{
        for(var i=1; i<=100; i++){
            if(i%3 ==0)
                console.log("Fizz");
            else if (i%5 ==0)
                console.log("Buzz");
            else
                console.log(i);
        }
    }
    //fun7();
    
//8)Write a program to find the Sum of Array Elements.
    const arr1=[2,2,2,2,3];
    var fun8=(arr)=>{
        return arr.reduce(func=(a,b)=>{
            return a + b;});
    }
    //console.log(fun8(arr1));
    
//9)Write a  program for swapping of two arrays
    var numbers = ["a","b","c"];
    var letters = [1,2,3];
    var fun9=(arr1,arr2)=>{
        var temp = arr2;
        arr2 = arr1;
        arr1 = temp;
        
    }
    

//10) Write a program to check whether given character is vowel or consonan
    var fun10=(char)=>{
        if(char == "a" ||char == "e" ||char == "i"||char =="o"||char =="u")
            console.log("it's a vowel");
        else
            console.log("it's a consonant");
    }
   // fun10("u");
    
//11) Write a program to find the largest number among three numbers
    var fun11=(a,b,c)=>{
        if(a>b){
           if(a>c){
               return a;
           }else{
               return c;
           }
        }else if(b>a){
            if(b>c)
            return b;
            else
            return c; 
        } 
    } 
    //console.log(fun11(10,20,5));
    
//12) Write a program to find the roots of a quadratic equation
    var fun12=(a, b, c)=>{
        var x = (-1 * b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        var y = (-1 * b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
        return x + " " + y;
    }

//13) Write a program to Check Whether the given year is a leap year or not
var fun13=(year)=>{
    var isLeap= (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
    if (isLeap==true) return "a leap year";
    else return "not a leap year";
 }
    // console.log(fun13(2020));

//14)Write a program to check whether a number is a positive number or negative number?
 var fun14= (num)=>{
     if (num==0) return "enter a nonzero number";
     else if(num>0) return "positive";
     else return "negative";
 } 
 //console.log(fun14((-9)));
    
//15)Write a program to find power of a number using recursion

     