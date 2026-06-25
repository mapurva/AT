//call()
function greet(){

console.log(this.name);

}

let student={

name:"Rahul"

};

greet.call(student);


// let name = {
//     firstname: "Seema",
//     lastname: "Bishwas",
//     printFullName: function () {
//         console.log(this.firstname + " " + this.lastname);
//     }
// };

// name.printFullName();

// let name2 = {
//     firstname: "Sachin",
//     lastname: "Tendulkar",
// };

// // Function borrowing
// name.printFullName.call(name2);


let name = {
    firstname: "Seema",
    lastname: "Bishwas",
};

let printFullName = function (hometown) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown);
};

printFullName.call(name, "Calcutta");

let name2 = {
    firstname: "Sachin",
    lastname: "Tendulkar",
};

// Function borrowing
printFullName.call(name2, "Mumbai");

//apply()
function add(a,b){

console.log(a+b);

}

add.apply(null,[10,20]);

//bind()

let person={

name:"Rahul"

};

function greet(){

console.log(this.name);

}

let fn=greet.bind(person);

fn();