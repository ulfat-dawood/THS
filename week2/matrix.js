var arr1 = [[0,1],[2,3]];
var arr2 = [[0,1],[2,3]];
var res = [[],[]];


for (var i=0; i<arr1.length; i++){
     
    for(var j=0; j<arr1.length; j++){
        
            res[i][j]=arr1[i][j]*arr2[j][i];
    }
}
console.log(res);