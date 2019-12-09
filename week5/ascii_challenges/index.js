var readlineSync = require("readline-sync");

var input = readlineSync.question("enter you first name?");

var nameArr= input.split("");

const ascii = require("./ascii.json");
var asciiArr=[];

for(var i=0;i<nameArr.length;i++){
    asciiArr.push(ascii[nameArr[i]]);
}

console.log(asciiArr);