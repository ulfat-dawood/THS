var readlineSync = require("readline-sync");

var input = readlineSync.question("enter you first name? ");
console.log(process.argv[2]+". "+input);