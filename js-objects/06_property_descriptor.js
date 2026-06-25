let student = {

    name:"Rahul"

};

console.log(

Object.getOwnPropertyDescriptor(student,"name")

);

//Writable
Object.defineProperty(student,

"name",

{

writable:false

});

student.name="Amit";

console.log(student.name);

//Enumerable
Object.defineProperty(student,

"name",

{

enumerable:false

});

console.log(Object.keys(student))

/*Configurable
Can delete?

Can redefine?

If false

No.
*/