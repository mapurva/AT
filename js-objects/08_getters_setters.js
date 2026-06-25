let student={

firstName:"Rahul",

lastName:"Patel",

get fullName(){

return this.firstName+" "+this.lastName;

},

set fullName(value){

let parts=value.split(" ");

this.firstName=parts[0];

this.lastName=parts[1];

}

};

console.log(student.fullName);

student.fullName="Amit Shah";

console.log(student.fullName);