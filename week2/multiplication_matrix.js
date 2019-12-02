var arr1 = [[0,1],[2,3]];
var arr2 = [[0,1],[2,3]];
var res = [[],[]];

var counter= 0;
for (var i=0; i<arr1.length; i++){
    counter++;  
    for(var j=0; j<arr1.length; j++){
        while(counter==1 || counter==2)
            res[i][j]=arr1[i][j]+arr2[i][j];
    }
}
console.log(res);