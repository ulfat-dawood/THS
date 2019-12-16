var fruits=["Bannana", "Pear", "Apple", "Mango"];
var sorted = fruits.sort(function(string1,string2){
    return string1.length - string2.length;
})

var res = sorted;
console.log(res);
