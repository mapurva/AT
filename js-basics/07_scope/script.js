//Example 1
if(true){
    var x = 5;
}

console.log(x);

// //Example 2
// if(true){
//     let y = 5;
// }

// console.log(y);
 
//Example 3 (Hoisting)
console.log(greeter);

var greeter = "hello";

//Example 4
let greeting = "Hi";

if(true){
    let greeting = "Hello";
    console.log(greeting);
}

console.log(greeting);