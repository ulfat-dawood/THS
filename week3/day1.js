// var func(a,b)=>{ //a^2  +  b^2  + 2ab
//     var c= (a**2 + b**2 + 2*a*b)
// }

// person.filter(obj => {
//     return obj.age < 50; 

// })

// person.forEach(obj =>{
//     if(obj.age <50){
//        console.log(obj.fn);
//     }
// })

const person=[{
    fn: "maha",
    ln: "mff",
    age: 20

},
{fn: "muna",
ln: "mff",
age: 30

},
{fn: "meem",
ln: "mff",
age: 50

},
]


// var func=(a,b)=>{
//     return a.age || 0 + b.age;
// }
// var c=  person.reduce(func);
// console.log(c);







// var arr2=["maha", "huda","fahad"]
// var func=(a,b)=>{
//     return a + " "+b;
// }
// var c= "all names: "+ arr2.reduce(func);
// console.log(c);

const printDate = ()=>{
    const date = new Date();
    const dd = date.getDate();
    const mm = date.getMonth();
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`
}
console.log(printDate());
