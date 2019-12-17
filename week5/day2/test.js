var table="";
var value;
    for(var j=0; j<=90; j=j+10){ 
        table+= "<tr>";
        for(var i=1; i<=10;i++){
            var value= i+j;
            table+= "<td>"+value+"</td> ";
        }
        table+="</tr>\n";
        
    } 
console.log(table);