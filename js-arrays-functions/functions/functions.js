//reuse
function square(x)
{
    return x*x;
}

console.log(square(10));

console.log(square(20));

console.log(square(30));

//Function Expression
const greet=function(name){ //anonymous function

    return "Hello "+name;

};

console.log(greet("Rahul"));


const factorial = function fac(n){
return n < 2 ? 1 : n * fac(n - 1)
}
res = factorial(4) // 24


//Arrow Function
const add=(a,b)=>a+b;

console.log(add(10,20));

//Passing Parameters to Functions
//Primitive parameters are passed to functions by value
//Object is passed to functions by reference

//Passing Function as Parameter
//example 1
var handle_data = function (func) {
var x = 2;
var y = 3;
return func(x, y);
}
var add = function (a, b) {
return a + b;
}
var subtract = function (a, b) {
return a - b;
}
console.log(handle_data(add)); // 5
console.log(handle_data(subtract)); // -1

//example 2
function map(func, arr) {
let result = []; // Create a new Array
let i;
for (i = 0; i != arr.length; i++)
result[i] = func(arr[i]);
return result;
}
const fn_cube = function (x) { return x * x * x
; }
let numbers = [0, 1, 2, 5, 10];
let cube = map(fn_cube, numbers);
console.log(cube);

//Returning a Function
function magic() {
return function(x) { return x *
42; };
}
var answer = magic();
answer(1337); // 56154