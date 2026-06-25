function Student(id,name,marks){

    this.id=id;

    this.name=name;

    this.marks=marks;

    this.result=function(){

        return this.marks>=40?"PASS":"FAIL";

    }

}

let students=[

new Student(1,"Rahul",85),

new Student(2,"Amit",33),

new Student(3,"Neha",91)

];

students.forEach(s=>{

console.log(

s.id,

s.name,

s.marks,

s.result()

);

});