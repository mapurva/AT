/*
In JavaScript, an object can be created in two ways:
1.Object literal
2.Object constructor */

let student = {
    rollNo: 101,
    name: "Rahul",
    branch: "Computer",
    cgpa: 8.75,
    greet:function(){

        console.log("Welcome");
    }
};

console.log(student);
student.greet();

//Add Property Dynamically
student.city = "Ahmedabad";

student["mobile"] = "9999999999";

console.log(student);

//Delete Property
delete student.mobile;

console.log(student);

//Undefined Property
console.log(student.salary);
console.log(student.hasOwnProperty("salary"));

//Loop Through Object
// for...in iterates over enumerable properties, while Object.keys() returns an array of an object's own enumerable keys.
for(let key in student){

    console.log(key, student[key]);

}