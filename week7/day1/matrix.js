var n = 3; 
n= n-1; 
var arr = [ [ 11, 2, 4 ], 
            [ 4, 5, 6 ], 
            [ 10, 8, -12 ] ];

val1=0;
val2=0;
for( i=n; i>=0; i--){
    val1+=(arr[n-i][n-i]); 
    val2+=(arr[n-i][i]);      
 }

console.log(Math.abs(val1-val2));

