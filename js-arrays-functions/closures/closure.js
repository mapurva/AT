/*
Outer Function

↓

Inner Function

↓

Outer finishes

↓

Still remembers variables
*/

function counter()
{
    let count=0;

    return function(){

        count++;

        console.log(count);

    }

}

let c=counter();

c();

c();

c();

/*One important characteristic of closure is that outer variables
can keep their states between multiple calls.

Remember, inner function does not keep the separate copy of
outer variables but it reference outer variables, that means
value of the outer variables will be changed if you change it
using inner function.
*/

var counter = 0;
function add() {
var counter = 0;
counter += 1;
console.log(counter)
}
add();
add();
add();