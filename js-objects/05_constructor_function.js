function Student(name, age, branch){

    this.name = name;

    this.age = age;

    this.branch = branch;

    this.greet = function(){

        console.log("Hello " + this.name);
    }

}

let s1 = new Student("Rahul",20,"Computer");

let s2 = new Student("Amit",21,"IT");

console.log(s1);

console.log(s2);

