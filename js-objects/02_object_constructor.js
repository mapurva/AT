/*
In JavaScript, an object can be created in two ways:
1.Object literal
2.Object constructor */

//Define the Object Constructor
function User(firstName, lastName, age) {
  // Properties
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  // Method
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}

//Create an Instance
const user1 = new User("Jane", "Doe", 28);

console.log(user1.firstName); // Output: Jane
console.log(user1["age"]);    // Output: 28

console.log(user1.getFullName()); // Output: Jane Doe
