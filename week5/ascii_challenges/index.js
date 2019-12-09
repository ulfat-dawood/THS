var readlineSync = require("readline-sync");

var input = readlineSync.question("enter you first name? ");

var nameArr= input.split("");

const ascii = require("./ascii.json");
var asciiArr=[];

for(var i=0;i<nameArr.length;i++){
    asciiArr.push(ascii[nameArr[i]]);
}

const decToBi = num => num === 0 ? 0 : num % 2 + 10 * decToBi(Math.floor(num / 2));

binArr =[];
for(var i=0;i<asciiArr.length;i++){
    binArr.push(decToBi(asciiArr[i]));
}
padArr=[];
for(var i=0;i<binArr.length;i++){
    var number = binArr[i];
    while(number.toString().length<8){
        number = "0" + number;
    }
    padArr.push(number);
}

console.log(padArr);

